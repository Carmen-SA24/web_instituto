'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
}

export default function Modal({ isOpen, onClose, title, imageSrc, imageAlt, content }: ModalProps) {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>
        
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={200}
              className={styles.modalImage}
              priority
            />
          </div>
          
          <div className={styles.contentText}>
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.modalFooter}>
          <Link href="/" className={styles.backButton}>
            ← Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
