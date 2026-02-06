'use client';

import styles from './newscard.module.css';

interface NewsCardProps {
  icon: string;
  title: string;
  description: string;
  onViewDetail: () => void;
}

export default function NewsCard({ icon, title, description, onViewDetail }: NewsCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImagePlaceholder}>{icon}</div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onViewDetail} className={styles.detailButton}>
          Ver detalle →
        </button>
      </div>
    </article>
  );
}
