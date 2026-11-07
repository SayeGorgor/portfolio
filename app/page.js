'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SplitText from "@/components/split-text";
import { projects } from "@/lib/projects";

import HeroParticleBackground from "@/components/hero-particle-background";
import MainParticleBackground from "@/components/main-particle-background";
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";

import GitLogo from './(icons)/git_logo.svg';
import JavaScriptLogo from './(icons)/javascript_logo.svg';
import NextJSLogo from './(icons)/nextjs_logo.svg';
import NodeJSLogo from './(icons)/nodejs_logo.svg';
import PostgreSQLLogo from './(icons)/postgresql_logo.svg';
import PythonLogo from './(icons)/python_logo.svg';
import ReactLogo from './(icons)/react_logo.svg';
import GoToLinkIcon from './(icons)/go_to_link_icon.svg';
import TypeScriptLogo from './(icons)/typescript_logo.svg';
import FastAPILogo from '../public/fastapi.svg';
import RestAPILogo from './(icons)/rest_api.svg';
import OpenAILogo from './(icons)/openai_logo.svg';
import DockerLogo from './(icons)/docker_logo.svg';

const featuredSkills = [
  { name: 'JavaScript', Logo: JavaScriptLogo, delay: 1 },
  { name: 'TypeScript', Logo: TypeScriptLogo, delay: 4 },
  { name: 'Python', Logo: PythonLogo, delay: 2 },
  { name: 'Next.js', Logo: NextJSLogo, delay: 3 },
  { name: 'React', Logo: ReactLogo, delay: 6 },
  { name: 'FastAPI', Logo: FastAPILogo, delay: 5 },
  { name: 'Node.js', Logo: NodeJSLogo, delay: 7 },
  { name: 'PostgreSQL', Logo: PostgreSQLLogo, delay: 10 },
  { name: 'REST APIs', Logo: RestAPILogo, delay: 8 },
  { name: 'Git/GitHub', Logo: GitLogo, delay: 9 },
  { name: 'OpenAI API', Logo: OpenAILogo, delay: 11 },
  { name: 'Docker', Logo: DockerLogo, delay: 12 },
];

const additionalTechnologies = [
  'HTML5', 'CSS3', 'Java', 'Express.js', 'MongoDB',
  'Tailwind CSS', 'Drizzle ORM', 'SQLAlchemy', 'Redis', 'Vitest',
];


export default function Home() {
  const skillCardSentinelRef = useRef(null);

  const [showSkillCards, setShowSkillCards] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setShowSkillCards(true);
          console.log('Intersection!')
        }
      },
      {
        threshold: 1
      }
    );

    if(skillCardSentinelRef.current) observer.observe(skillCardSentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <section id='hero' className={styles.hero}>
        <HeroParticleBackground />
        <h1>Hello, I&apos;m <span>Saye</span><br />An aspiring full stack developer</h1>
        <a 
          className={styles['view-work-btn']}
          href="#about"
        >
          View My Work!
        </a>
      </section>
      <Header />
      <div className={styles['main-content']}>
        <div className={styles['main-particle-wrapper']}>
          <MainParticleBackground />
        </div>
        <section 
          id='about'
          className={`
            ${styles.section}
            ${styles['about-section']}
          `}
        >
          <h2>About</h2>
          <div className={styles['about-section-content']}>
            <div className={styles.description}>
              <div className={styles['headshot-wrapper']}>
                <Image
                  src="/photos/headshot.jpg"
                  alt="Saye's headshot"
                  width={489}
                  height={489}
                  unoptimized
                />
              </div>
              <p>
                I build full-stack web applications, from responsive React and Next.js
                interfaces to Node.js APIs and database-backed features. My projects
                include a real-time messenger and a task manager. I am currently
                pursuing my B.S. in Computer Science at Kennesaw State University.
                Away from my computer, I enjoy videogames, working out, and listening
                to music.
              </p>
            </div>
            <div className={styles.skills}>
              <ul className={styles['skills-grid']} aria-label="Featured technologies">
                {featuredSkills.map(({ name, Logo, delay }, index) => (
                  <li key={name}>
                    <div
                      className={[styles['skill-card'], showSkillCards ? styles.visible : ''].join(' ')}
                      style={{ '--i': delay }}
                      ref={index === 1 ? skillCardSentinelRef : undefined}
                    >
                      <Logo className={styles['skills-logo']} aria-hidden="true" focusable="false" />
                      <span>{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <section
                id="additional-technologies"
                className={styles['additional-technologies']}
                aria-labelledby="additional-technologies-heading"
              >
                <h3 id="additional-technologies-heading">Additional Technologies</h3>
                <ul className={styles['technology-chips']}>
                  {additionalTechnologies.map(technology => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
        <section 
          id='projects'
          className={`
            ${styles.section}
            ${styles['projects-section']}
          `}
        >
          <h2>Projects</h2>
          <ul
            className={styles['projects-list']}
            style={{ '--stack-intervals': Math.max(1, projects.length - 1) }}
          >
            {projects.map((project, index) => (
              <li key={project.id} style={{ '--p-index': index }}>
                <div className={styles['project-card']}>
                  <div className={styles['project-card-title-container']}>
                    <h3 className={styles['project-card-title']}>
                      <SplitText text={project.title} href={project.liveUrl} />
                      <GoToLinkIcon className={styles['go-to-link-icon']} aria-hidden="true" focusable="false" />
                    </h3>
                    <div className={styles['project-title-dupe']} aria-hidden="true">
                      <SplitText text={project.title} />
                    </div>
                  </div>
                  <ul className={styles['tech-stack-list']} aria-label="Technologies">
                    {project.technologies.map(technology => (
                      <li key={technology}>
                        <div className={styles['tech-stack-card']}>{technology}</div>
                      </li>
                    ))}
                  </ul>
                  <p className={styles['project-card-description']}>{project.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section 
          id='contact'
          className={`
            ${styles['contact-section']}
            ${styles.section}
          `}
        >
          <h2>Contact</h2>
          <p className={styles['contact-description']}>
            Have a question or interested in working together? Send me a message and
            I&apos;ll get back as soon as possible!
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
