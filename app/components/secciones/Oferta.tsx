import styles from "./oferta.module.css";

export default function OfertaContent() {
  return (
    <article className={styles.page}>
      <header className={styles.container}>
        <h1 className={styles.title}>Oferta Educativa</h1>
        <p className={styles.subtitle}>
          Descubre todas las posibilidades formativas que te ofrecemos
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2> Oferta Educativa</h2>
          <p>
            Conoce los niveles educativos impartidos: ESO, Bachillerato y Ciclos
            Formativos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>📊 Departamentos</h2>
          <p>Información sobre los diferentes departamentos didácticos.</p>
        </section>

        <section className={styles.section}>
          <h2>🎓 BTOPA</h2>
          <p>Bachillerato de Investigación y Excelencia.</p>
        </section>

        <section className={styles.section}>
          <h2>🏫 ESPA</h2>
          <p>Educación Secundaria para Personas Adultas.</p>
        </section>
      </div>
    </article>
  );
}
