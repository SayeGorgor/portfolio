import styles from '@/app/page.module.css';

export default function SplitText({ text, href }) {
    const Tag = href ? 'a' : 'span';

    return(
        <Tag
            href={href}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            aria-label={href ? text : undefined}
            className={styles['split-text']}
        >
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className={styles.char}
                    style={{ '--i': i }}
                    aria-hidden={href ? true : undefined}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </Tag>
    );
}
