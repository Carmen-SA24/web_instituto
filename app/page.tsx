import styles from "./page.module.css";
import Card from "./components/card/card";

// 1. Aquí están los datos de las tarjetas.
const cardsData = [
  {
    icon: "📚",
    title: "Oferta Educativa",
    description:
      "Descubre nuestros ciclos formativos y opciones de bachillerato para el nuevo curso.",
    href: "/oferta-educativa",
    linkText: "Ver oferta →",
  },
  {
    icon: "📰",
    title: "Últimas Noticias",
    description:
      "Jornadas culturales, eventos deportivos y comunicados de jefatura de estudios.",
    href: "/noticias",
    linkText: "Leer más →",
  },
  {
    icon: "💻",
    title: "Plataforma Digital",
    description:
      "Acceso a recursos digitales, biblioteca virtual y herramientas para alumnos.",
    href: "/biblioteca",
    linkText: "Acceder →",
  },
  {
    icon: "✉️",
    title: "Contacta con nosotros",
    description:
      "Estamos disponibles para resolver tus dudas sobre matriculación y secretaría.",
    href: "/contacto",
    linkText: "Contacto →",
  },
];

// Componente de página de inicio: Renderiza el contenido principal de la ruta raíz.
export default function Home() {
  return (
    <section className={styles.homeContent}>
      <h2 className={styles.sectionTitle}>Novedades y Destacados</h2>

      <section className={styles.cardsGrid}>
        {/* 2. Recorremos los datos y creamos una tarjeta automática por cada uno */}
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            href={card.href}
            linkText={card.linkText}
          />
        ))}
      </section>
    </section>
  );
}
