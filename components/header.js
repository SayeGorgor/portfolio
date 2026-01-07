'use client';

import { useEffect } from 'react';
import styles from './header.module.css';
import { useActiveSection } from '@/lib/helpers/helpers';

export default function Header() {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const {previousSection, activeSection} = useActiveSection(sections);

    useEffect(() => {
        console.log('Sections but from the header: ', previousSection, activeSection);
        console.log('Active: ', activeSection, ' Index: ', sections.indexOf(activeSection));
        console.log('Prev: ', previousSection, ' Index: ', sections.indexOf(previousSection));
    }, [activeSection]);

    return(
        <nav className={styles.body}>
            <ul className={styles['links-list']}>
                {/* <div className={styles['nav-bar-ball']}></div> */}
                {sections.map((section, index) => (
                    <li key={section}>
                        <div className={styles['link-outline']}>
                            <a 
                                href={`#${section}`}
                                className={`
                                    ${styles.link}
                                    ${activeSection === section ? styles.active : styles.inactive}
                                    ${
                                        sections.indexOf(activeSection) <= index ? 
                                        styles.left : styles.right
                                    }
                                    ${
                                        sections.indexOf(previousSection) <= index ? 
                                        styles.prevLeft : styles.prevRight
                                    }
                                `}
                                style={{
                                    '--link-index': index,
                                    '--link-name': section
                                }}
                                data-link-name={section}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}