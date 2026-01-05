import styles from './header.module.css';
import { useActiveSection } from '@/lib/helpers/helpers';

export default function Header() {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const activeSection = useActiveSection(sections);
    return(
        <nav className={styles.body}>
            <ul className={styles['links-list']}>
                {sections.map(section => (
                    <li key={section}>
                        <div className={styles['link-outline']}>
                            <a 
                                href={`#${section}`}
                                className={`
                                    ${styles.link}
                                    ${activeSection === section ? styles.active : ''}
                                `}
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