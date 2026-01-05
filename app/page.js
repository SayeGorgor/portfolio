'use client';

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import SplitText from "@/components/split-text";

import HeroParticleBackground from "@/components/hero-particle-background";
import MainParticleBackground from "@/components/main-particle-background";
import Header from "@/components/header";

import CSS3Logo from './(icons)/css3_logo.svg';
import ExpressLogo from './(icons)/expressjs_logo.svg';
import GitLogo from './(icons)/git_logo.svg';
import HTML5Logo from './(icons)/html5_logo.svg';
import JavaLogo from './(icons)/java_logo.svg';
import JavaScriptLogo from './(icons)/javascript_logo.svg';
import MongoDBLogo from './(icons)/mongodb_logo.svg';
import NextJSLogo from './(icons)/nextjs_logo.svg';
import NodeJSLogo from './(icons)/nodejs_logo.svg';
import PostgreSQLLogo from './(icons)/postgresql_logo.svg';
import PythonLogo from './(icons)/python_logo.svg';
import ReactLogo from './(icons)/react_logo.svg';
import GoToLinkIcon from './(icons)/go_to_link_icon.svg';


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
        <h1>Hello, I'm <span>Saye</span><br />An aspiring fullstack developer</h1>
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
                <img src="/photos/headshot.jpg" alt="Saye's headshot" />
              </div>
              <p>
                I'm an aspiring full stack developer with a deep passion for learning 
                more about the field of software development and expanding and 
                sharpening my skillset. I am currently pursuing my B.S. in Computer 
                Science at Kennesaw State University and enjoy creating projects 
                that apply both frontend and backend skills. When I'm not at my 
                computer I like to spend my time playing videogames, working out
                and listening to music.
              </p>
            </div>
            <div className={styles.skills}>
              <ul className={styles['skills-grid']}>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 1}}
                  >
                    <HTML5Logo className={styles['skills-logo']} />
                    HTML5
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 4}}
                    ref={skillCardSentinelRef}
                  >
                    <JavaScriptLogo className={styles['skills-logo']} />
                    JavaScript
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 2}}
                  >
                    <CSS3Logo className={styles['skills-logo']} />
                    CSS3
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 3}}
                  >
                    <NextJSLogo className={styles['skills-logo']} />
                    Next.js
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 6}}
                  >
                    <ReactLogo className={styles['skills-logo']} />
                    React
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 5}}
                  >
                    <ExpressLogo className={styles['skills-logo']} />
                    Express.js
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 7}}
                  >
                    <NodeJSLogo className={styles['skills-logo']} />
                    Node.js
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 10}}
                  >
                    <GitLogo className={styles['skills-logo']} />
                    Git
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 8}}
                  >
                    <MongoDBLogo className={styles['skills-logo']} />
                    MongoDB
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 9}}
                  >
                    <PostgreSQLLogo className={styles['skills-logo']} />
                    PostgreSQL
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 11}}
                  >
                    <JavaLogo className={styles['skills-logo']} />
                    Java
                  </div>
                </li>
                <li>
                  <div 
                    className={`
                      ${styles['skill-card']}
                      ${showSkillCards ? styles['visible'] : ''}
                    `}
                    style={{'--i': 12}}
                  >
                    <PythonLogo className={styles['skills-logo']} />
                    Python
                  </div>
                </li>
              </ul>
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
          <ul className={styles['projects-list']}>
            <li style={{'--p-index': 0}}>
              <div className={styles['project-card']}>
                <div className={styles['project-card-title-container']}>
                  <div className={styles['project-card-title']}>
                    <SplitText text='msgME Messenger App' href='https://msgme2.vercel.app' />
                    <GoToLinkIcon className={styles['go-to-link-icon']} />
                  </div>
                  <SplitText className={styles['project-title-dupe']} text='msgME Messenger App' />
                </div>
                <ul className={styles['tech-stack-list']}>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Next.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      React.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      JavaScript
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Socket.io
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Express.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Node.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Supabase
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      PostgreSQL
                    </div>
                  </li>
                </ul>
                <p className={
                  styles['project-card-description']
                }>
                  This is a responsive full stack messenger web app that allows users 
                  to message their friends in real-time. Users are able to create an account or
                  log in with OAuth (Github or Instagram) and customize their profile. Afterwards
                  they can search for other users and add friends to begin messaging!
                </p>
              </div>
            </li>
            <li style={{'--p-index': 1}}>
              <div className={styles['project-card']}>
                <div className={styles['project-card-title-container']}>
                  <div className={styles['project-card-title']}>
                    <SplitText text='AX2 Task Manager' href='https://ax2.onrender.com' />
                    <GoToLinkIcon className={styles['go-to-link-icon']} />
                  </div>
                  <SplitText className={styles['project-title-dupe']} text='AX2 Task Manager' />
                </div>
                <ul className={styles['tech-stack-list']}>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      React.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      JavaScript
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Node.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Express.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      MongoDB
                    </div>
                  </li>
                </ul>
                <p className={
                  styles['project-card-description']
                }>
                  This is a full stack task manager web app that allows users to 
                  store tasks for multiple different projects. To start you can create 
                  an account and then log in using your credentials. Afterwards you 
                  will be taken to a screen where you can create and manage your 
                  projects. If you click on a project you will then be taken to a 
                  screen where you can manage all of your tasks for said project.
                </p>
              </div>
            </li>
            <li style={{'--p-index': 2}}>
              <div className={styles['project-card']}>
                <div className={styles['project-card-title-container']}>
                  <div className={styles['project-card-title']}>
                    <SplitText text='KSUVSA Website' href='https://ksuvsa.vercel.app' />
                    <GoToLinkIcon className={styles['go-to-link-icon']} />
                  </div>
                  <SplitText className={styles['project-title-dupe']} text='KSUVSA Website' />
                </div>
                <ul className={styles['tech-stack-list']}>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Next.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      React.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      JavaScript
                    </div>
                  </li>
                </ul>
                <p className={
                  styles['project-card-description']
                }>
                  This is a responsive, multi-page website made for the Vietnamese 
                  Student Association at Kennesaw State University. It showcases the core
                  themes and values of the club while enforncing strong SEO principles. 
                  It also includes an admin login to allow the staff to edit events and 
                  links as they please.
                </p>
              </div>
            </li>
            <li style={{'--p-index': 3}}>
              <div className={styles['project-card']}>
                <div className={styles['project-card-title-container']}>
                  <div className={styles['project-card-title']}>
                    <SplitText text='RTL Films Website' href='https://sayegorgor.github.io/rtlfilms/' />
                    <GoToLinkIcon className={styles['go-to-link-icon']} />
                  </div>
                  <SplitText className={styles['project-title-dupe']} text='RTL Films Website' />
                </div>
                <ul className={styles['tech-stack-list']}>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      Next.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      React.js
                    </div>
                  </li>
                  <li>
                    <div className={styles['tech-stack-card']}>
                      JavaScript
                    </div>
                  </li>
                </ul>
                <p className={
                  styles['project-card-description']
                }>
                  This is a responsive, multi-page website made for a 
                  photographer/videographer in the Atlanta area. It includes a showcase
                  of his work as well as a contact form and enforces good SEO principles.
                  It includes a showcase
                  of his work as well as a contact form and enforces good SEO principles.
                </p>
              </div>
            </li>
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
          <p>
            Have a question or interested in working together? Send me a message and
            I'll get back as soon as possible!
          </p>
          <form className={styles['contact-form']}>
            <input 
              type="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Name" 
            />
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" 
            />
            <textarea 
              name='message'
              rows={8}
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
            />
            <button type='submit' className={styles['submit-btn']}>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}
