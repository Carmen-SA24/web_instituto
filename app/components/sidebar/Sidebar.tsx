import Link from "next/link";
import styles from "./sidebar.module.css";

// Lista de enlaces del sidebar. Añadimos aquí nuevos items fácilmente.
const sidebarLinks = [
  { href: "/noticias", text: "📅 Calendario Escolar" },
  { href: "/oferta-educativa", text: "📝 Secretaría Virtual" },
  { href: "/biblioteca", text: "📖 Club de Lectura" },
  { href: "/contacto", text: "📍 Ubicación" },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Widget de búsqueda: Permite al usuario buscar contenido en el sitio */}
      <section className={styles.searchWidget}>
        <h3>Buscar</h3>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Escribe aquí..."
            aria-label="Buscar"
          />
          <button>🔍</button>
        </div>
      </section>

      <section className={styles.widget}>
        <h3>Enlaces Rápidos</h3>
        <ul className={styles.widgetList}>
          {/* Generamos los enlaces automáticamente desde la lista de arriba */}
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Widget de video: Muestra un video de presentación del centro */}
      <section className={styles.widget}>
        <h3>Conoce nuestro centro</h3>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/Es0fCbizc6s?controls=0&rel=0&disablekb=1&showinfo=0&modestbranding=0&html5=1&iv_load_policy=3&autoplay=0&end=0&loop=0&playsinline=0&start=0&nocookie=false&enablejsapi=1&origin=https%3A%2F%2Fiescuravalera.es&widgetid=1&forigin=https%3A%2F%2Fiescuravalera.es%2F&aoriginsup=0&vf=1"
            title="Video IES Cura Valera"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      
    </aside>
  );
}
