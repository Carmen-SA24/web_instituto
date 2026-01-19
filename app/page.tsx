import Link from "next/link";
import styles from "./page.module.css";

// Componente de página de inicio: Renderiza el contenido principal de la ruta raíz.
export default function Home() {
  return (
    <div className={styles.homeContent}>
      <h2 className={styles.sectionTitle}>Novedades y Destacados</h2>

      <div className={styles.cardsGrid}>
        {/* Tarjeta informativa: Oferta Educativa */}
        <article className={styles.card}>
          <div className={styles.cardImagePlaceholder}>📚</div>
          <div className={styles.cardBody}>
            <h3>Oferta Educativa</h3>
            <p>
              Descubre nuestros ciclos formativos y opciones de bachillerato
              para el nuevo curso.
            </p>
            <Link href="/oferta-educativa" className={styles.cardLink}>
              Ver oferta →
            </Link>
          </div>
        </article>

        {/* Tarjeta informativa: Últimas Noticias */}
        <article className={styles.card}>
          <div className={styles.cardImagePlaceholder}>📰</div>
          <div className={styles.cardBody}>
            <h3>Últimas Noticias</h3>
            <p>
              Jornadas culturales, eventos deportivos y comunicados de jefatura
              de estudios.
            </p>
            <Link href="/noticias" className={styles.cardLink}>
              Leer más →
            </Link>
          </div>
        </article>

        {/* Tarjeta informativa: Plataforma Digital */}
        <article className={styles.card}>
          <div className={styles.cardImagePlaceholder}>💻</div>
          <div className={styles.cardBody}>
            <h3>Plataforma Digital</h3>
            <p>
              Acceso a recursos digitales, biblioteca virtual y herramientas
              para alumnos.
            </p>
            <Link href="/biblioteca" className={styles.cardLink}>
              Acceder →
            </Link>
          </div>
        </article>

        {/* Tarjeta informativa: Contacto */}
        <article className={styles.card}>
          <div className={styles.cardImagePlaceholder}>✉️</div>
          <div className={styles.cardBody}>
            <h3>Contacta con nosotros</h3>
            <p>
              Estamos disponibles para resolver tus dudas sobre matriculación y
              secretaría.
            </p>
            <Link href="/contacto" className={styles.cardLink}>
              Contacto →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
