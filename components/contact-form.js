'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './contact-form.module.css';
import LoadingAnimation from '@/app/(icons)/loading_animation.svg';

export default function ContactForm() {
    const tokenRef = useRef(null);

    //States
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [systemMessage, setSystemMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setSystemMessage('');
        setIsLoading(true);
        
        if(!tokenRef.current) {
            setHasError(true);
            setIsLoading(false);
            setSystemMessage('Please complete CAPTCHA');
            return;
        }

        const form = e.target;

        console.log('Values')
        console.log('Form: ', form);
        console.log('Name: ', form.name.value);
        console.log('Email: ', form.email.value);
        console.log('Message: ', form.message.value);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
                captchaToken: tokenRef.current
            })
        });
        const { success, message } = await res.json();

        setIsLoading(false);
        setSystemMessage(message);
        setHasError(!success);
    }

    //Use Effect
    useEffect(() => {
        window.turnstileCallback = (token) => {
            tokenRef.current = token;
        }
    }, []);

    return(
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
            {isLoading && <LoadingAnimation className={styles['loading-animation']} />}
            {
                systemMessage && 
                <p className={`
                    ${styles.message}
                    ${hasError ? styles.error : styles.success }
                `}>{systemMessage}</p>
            }
            <input 
                name='name'
                type="name" 
                placeholder="Name" 
            />
            <input 
                name='email'
                type="email" 
                placeholder="Email" 
                required
            />
            <textarea 
                name='message'
                rows={8}
                placeholder="Message..."
                required
            />
            <div 
                className='cf-turnstile'
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-callback='turnstileCallback'
            />
            <button type='submit' className={styles['submit-btn']}>Submit</button>
        </form>
    )
}