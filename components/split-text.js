import styles from '@/app/page.module.css';

export default function SplitText({ text, href }) {
    return(
        <a href={href} target='_blank' className={styles['split-text']}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className={styles.char}
                    style={{ '--i': i }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </a>
    );
}