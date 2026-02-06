import Link from "next/link";
import Logo from "../logo/logo";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Sección de información: Datos básicos del instituto */}
          <section className={styles.info}>
            <h3 className={styles.title}>IES CURA VALERA</h3>
            <p className={styles.subtitle}>Huércal-Overa, Almería</p>
            <p className={styles.text}>
              Formación de calidad para el futuro de nuestros estudiantes
            </p>
          </section>

          {/* Navegación secundaria: Enlaces de acceso rápido */}
          <nav className={styles.links} aria-label="Enlaces pie de página">
            <h4 className={styles.linksTitle}>Enlaces Rápidos</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/noticias">Noticias</Link>
              </li>
              <li>
                <Link href="/oferta-educativa">Oferta Educativa</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>

          {/* Redes sociales: Iconos con enlaces a plataformas externas */}
          <section className={styles.social}>
            <h4 className={styles.socialTitle}>Síguenos</h4>
            <div className={styles.socialIcons}>
              <Logo 
                src="/facebook.png"
                alt="Facebook"
                href="https://facebook.com"
                width={30}
                height={30}
              />
              <Logo 
                src="/twitter.png"
                alt="Twitter"
                href="https://twitter.com"
                width={30}
                height={30}
              />
              <Logo 
                src="/instagram.png"
                alt="Instagram"
                href="https://instagram.com"
                width={30}
                height={30}
              />
              <Logo 
                src="/youtube.png"
                alt="YouTube"
                href="https://youtube.com"
                width={30}
                height={30}
              />
            </div>
          </section>
        </div>

  
        {/* Derechos de autor: Información sobre la propiedad legal del sitio */}
        <div className={styles.copyright}>
          <p>
            © 2025 <span className={styles.highlight}>IES Cura Valera</span> -
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
