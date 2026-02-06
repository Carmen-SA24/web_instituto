import Link from "next/link";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  description: string;
  icon: string; // Emoji o texto del icono
  href: string;
  linkText: string;
}

export default function Card({
  title,
  description,
  icon,
  href,
  linkText,
}: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImagePlaceholder}>{icon}</div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className={styles.cardLink}>
          {linkText}
        </Link>
      </div>
    </article>
  );
}
