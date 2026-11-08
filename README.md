# Developer Portfolio

**A personal website showcasing my software projects, technical skills, and approach to building interactive web experiences.**

[**GitHub profile**](https://github.com/SayeGorgor) · [**Portfolio repository**](https://github.com/SayeGorgor/portfolio)

I'm **Saye Gorgor**, a computer science student and aspiring full-stack developer. I built this portfolio to bring my work together in one place, with an emphasis on responsive design, custom interactions, and clear project storytelling.

## Highlights

- **Interactive hero section:** animated particle backgrounds and custom text effects.
- **Featured skills:** technology cards with animated borders and reveal interactions.
- **Stacking project cards:** a scroll-based layout that progressively layers featured projects as visitors move through the page.
- **Project-focused presentation:** concise descriptions, technology tags, and direct links to live applications.
- **Responsive layout:** tailored experiences across phones, tablets, and desktops.
- **Contact form:** server-side validation, email delivery, and abuse-prevention controls.

## Featured Work

| Project | Description | Demo |
| --- | --- | --- |
| **LessonMapr** | Tutoring management platform for lessons, student records, resources, and scheduling. | [Visit](https://lessonmapr.vercel.app/) |
| **tutorME** | Full-stack marketplace for finding online and local tutors. | [Visit](https://tutorme2.vercel.app/) |
| **SKG Games** | Daily logic and spatial puzzles with persistent progress. | [Play](https://skg-games.vercel.app/) |

The website also presents additional projects and professional experience.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16, React, JavaScript |
| Styling and UI | CSS Modules, custom responsive CSS, SVG assets |
| Visual effects | tsParticles, custom scroll and hover interactions |
| Contact and validation | Resend, Zod |
| Abuse prevention | Upstash Redis and rate limiting |
| Development | ESLint, npm |
| Deployment | Vercel |

## Design and Implementation

**Custom interaction design.** The portfolio uses intentionally crafted effects rather than a generic template. Skills cards animate as they enter view, while project cards use a shared index-based sticky stacking effect that accommodates an expandable project list.

**Content separated from presentation.** Project data lives in [`lib/projects.js`](./lib/projects.js) and is rendered by reusable interface components. This makes adding or rearranging work easier without rewriting the display logic.

**Contact-form safeguards.** Contact submissions use server-side validation and rate-limiting infrastructure to reduce spam and abuse. Email delivery and operational settings are kept outside the client bundle.

## Project Structure

```text
portfolio/
├── app/             # Page routes, styles and API handlers
├── components/      # Reusable UI and animated components
├── lib/             # Project data and shared logic
├── public/          # Images, icons and other assets
├── docs/            # Supporting documentation
└── package.json
```

## Getting Started

**Requirements:** Node.js and npm.

```bash
git clone https://github.com/SayeGorgor/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To use the contact form locally, configure the required email and rate-limiting services with your own development environment variables. The website's presentation can be explored without sending a contact request.

### Checks

```bash
npm run lint
npm run build
```

## Deployment

The project is designed for deployment on Vercel. Configure any required server-side email and Redis environment variables in the deployment settings, and verify the public deployment URL before sharing it.

## About Me

I study Computer Science at Kennesaw State University and enjoy designing and developing applications across frontend and backend technologies. This portfolio evolves alongside the projects it showcases.

**[Explore my GitHub](https://github.com/SayeGorgor)**


## Technical documentation

See [Frontend engineering](docs/FRONTEND.md) for responsive stacking, skill animations, accessibility, particle performance considerations and asset attribution.
