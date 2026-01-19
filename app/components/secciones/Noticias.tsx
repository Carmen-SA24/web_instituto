import styles from "./noticias.module.css";

export default function NoticiasContent() {
  return (
    <article className={styles.page}>
      <header className={styles.container}>
        <h1 className={styles.title}>Noticias</h1>
        <p className={styles.subtitle}>
          Mantente informado sobre las últimas novedades y eventos del instituto
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>📋 Jefatura de Estudios</h2>
          <p>
            Información y comunicados de la Jefatura de Estudios del centro.
          </p>
        </section>

        <section className={styles.section}>
          <h2>⚖️ Plan de Igualdad y Escuela</h2>
          <p>Iniciativas y actividades del Plan de Igualdad del instituto.</p>
        </section>

        <section className={styles.section}>
          <h2>🏆 Trofeo Director</h2>
          <p>Competiciones y eventos deportivos organizados por el centro.</p>
        </section>

        <section className={styles.section}>
          <h2>👥 Adultos</h2>
          <p>Formación y actividades para educación de adultos.</p>
        </section>

        <section className={styles.section}>
          <h2>📸 Videos y Fotos</h2>
          <p>Galería multimedia de eventos y actividades del instituto.</p>
        </section>
      </div>
    </article>
  );
}
