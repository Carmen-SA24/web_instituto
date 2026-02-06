'use client';

import { useState } from 'react';
import styles from "./noticias.module.css";
import NewsCard from '../newscard/NewsCard';
import Modal from '../modal/Modal';
import { getNewsById } from '@/app/data/newsData';

const newsItems = [
  {
    id: 'jefatura-estudios',
    icon: '📋',
    title: 'Jefatura de Estudios',
    description: 'Información y comunicados de la Jefatura de Estudios del centro.',
  },
  {
    id: 'plan-igualdad',
    icon: '⚖️',
    title: 'Plan de Igualdad y Escuela',
    description: 'Iniciativas y actividades del Plan de Igualdad del instituto.',
  },
  {
    id: 'trofeo-director',
    icon: '🏆',
    title: 'Trofeo Director',
    description: 'Competiciones y eventos deportivos organizados por el centro.',
  },
  {
    id: 'educacion-adultos',
    icon: '👥',
    title: 'Adultos',
    description: 'Formación y actividades para educación de adultos.',
  },
  {
    id: 'galeria-multimedia',
    icon: '📸',
    title: 'Videos y Fotos',
    description: 'Galería multimedia de eventos y actividades del instituto.',
  },
];

export default function NoticiasContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const handleOpenModal = (newsId: string) => {
    setSelectedNews(newsId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedNews(null);
  };

  const newsDetail = selectedNews ? getNewsById(selectedNews) : null;

  return (
    <article className={styles.page}>
      <header className={styles.container}>
        <h1 className={styles.title}>Noticias</h1>
        <p className={styles.subtitle}>
          Mantente informado sobre las últimas novedades y eventos del instituto
        </p>
      </header>

      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <NewsCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onViewDetail={() => handleOpenModal(item.id)}
          />
        ))}
      </div>

      {newsDetail && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={newsDetail.title}
          imageSrc={newsDetail.imageSrc}
          imageAlt={newsDetail.imageAlt}
          content={newsDetail.content}
        />
      )}
    </article>
  );
}
