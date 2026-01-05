import styles from './footer.module.css';
import GithubLogo from '@/app/(icons)/github_logo.svg';
import LinkedInLogo from '@/app/(icons)/linkedin_logo.svg';

export default function Footer() {
    return(
        <footer className={styles.body}>
            <h2>Saye Gorgor</h2>
            <p>Email: sgorgor02@gmail.com</p>
            <div className={styles.links}>
                <a 
                    href='https://github.com/SayeGorgor'
                    target='_blank'
                    className={styles.link}
                >
                    <GithubLogo className={`
                        ${styles['link-logo']}
                        ${styles['github-logo']}
                    `} />
                </a>
                <a 
                    href='https://www.linkedin.com/in/saye-gorgor-bb0666162/'
                    target='_blank'
                    className={styles.link}
                >
                    <LinkedInLogo className={styles['link-logo']} />
                </a>
            </div>
        </footer>
    );
}