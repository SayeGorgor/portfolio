import { rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/verify-turnstile";
import { Resend } from "resend";
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    name: z.string().min(2),
    email: z.email(),
    message: z.string().min(10),
    captchaToken: z.string()
});

export const POST = async(req) => {
    const ip = req.headers.get('x-forwarded-for') ??
               req.headers.get('x-real-ip') ??
               'unknown';
    
    const { success:rateLimitSuccess } = await rateLimit.limit(ip);

    // if(!rateLimitSuccess) {
    //     return Response.json(
    //         { error: 'Too many requests' },
    //         { status: 429 }
    //     );
    // }

    const body = await req.json();
    const { success:parsedSuccess, data:parsedData, error } = schema.safeParse(body);

    if(!parsedSuccess) {
        console.log(error)
        return Response.json(
            { success: false, message: 'Invalid Input' },
            { status: 400 }
        );
    }

    const { name, email, message, captchaToken } = parsedData;

    const validCaptcha = await verifyTurnstile(captchaToken);
    if(!validCaptcha) {
        return Response.json(
            { success: false, message: 'CAPTCHA Failed' },
            { status: 403 }
        );
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'sgorgor02@gmail.com',
            subject: 'New Portfolio Message',
            html: `
                <p><strong>Name: </strong>${name}</p>
                <p><strong>Email: </strong>${email}</p>
                <p>${message}</p>
            `
        });

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Your Message Has Been Received!',
            html: `
                <p>Hi ${name},</p>

                <p>
                    Thank you for reaching out! I will review your message and get back to
                    you as soon as I can.
                </p>

                <p><strong>Your Message: </strong></p>
                <blockquote>${message}</blockquote>

                <p>Sincerely,<br />Saye Gorgor</p>
            `
        });
    } catch(err) {
        console.error('Resend Error:', err);
        return Response.json({ success: false, message: 'Failed to send emails' }, { status: 500 });
    }

    console.log()
    return Response.json(
        { success: true, message: 'Message Sent Successfully!'},
        { status: 200 }
    );
}