import styles from "./biblioteca.module.css";

export default function BibliotecaContent() {
  return (
    <article className={styles.page}>
      <header className={styles.container}>
        <h1 className={styles.title}>Biblioteca Escolar</h1>
        <p className={styles.subtitle}>
          Tu espacio de lectura, investigación y aprendizaje
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>📖 BiblioWeb</h2>
          <p>
            Accede al catálogo online de nuestra biblioteca y gestiona tus
            préstamos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>📝 Blog de la Biblioteca</h2>
          <p>
            Descubre las últimas reseñas, recomendaciones y actividades de
            fomento a la lectura.
          </p>
        </section>
      </div>
    </article>
  );
}
