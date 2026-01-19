import styles from "./contacto.module.css";

export default function ContactoContent() {
  return (
    <article className={styles.page}>
      <header className={styles.container}>
        <h1 className={styles.title}>Contacto</h1>
        <p className={styles.subtitle}>
          Ponte en contacto con nosotros. Estamos aquí para ayudarte.
        </p>
      </header>

      <div className={styles.grid}>
        {/* Sección de contacto: Muestra los datos de ubicación, teléfono y correo */}
        <section className={styles.infoCard}>
          <h2>Información de Contacto</h2>

          <article className={styles.infoItem}>
            <div className={styles.icon}>📍</div>
            <div>
              <h3>Dirección</h3>
              <p>
                IES Cura Valera
                <br />
                Huércal-Overa, Almería
                <br />
                España
              </p>
            </div>
          </article>

          <article className={styles.infoItem}>
            <div className={styles.icon}>📞</div>
            <div>
              <h3>Teléfono</h3>
              <p>+34 950 XXX XXX</p>
            </div>
          </article>

          <article className={styles.infoItem}>
            <div className={styles.icon}>✉️</div>
            <div>
              <h3>Email</h3>
              <p>info@iescuravalera.es</p>
            </div>
          </article>

          <article className={styles.infoItem}>
            <div className={styles.icon}>🕐</div>
            <div>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 8:00 - 14:00</p>
            </div>
          </article>
        </section>

        {/* Formulario de mensajes: Permite al usuario enviar una consulta */}
        <section className={styles.formCard}>
          <h2>Envíanos un Mensaje</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                required
                placeholder="Asunto del mensaje"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                required
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Enviar Mensaje
            </button>
          </form>
        </section>
      </div>
    </article>
  );
}
