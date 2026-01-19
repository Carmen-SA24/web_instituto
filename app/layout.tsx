import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Sidebar from "./components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "IES Cura Valera - Huércal-Overa",
  description: "Web oficial del Instituto de Educación Secundaria Cura Valera",
};

// RootLayout: Componente principal que define la estructura global de la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {/* Componente de navegación principal */}
        <Navbar />

        {/* Sección Hero: Muestra la imagen principal y el título del instituto */}
        <section className="hero-wrapper">
          <div className="hero-image-container">
            <Image
              src="/header.png"
              alt="Cabecera IES Cura Valera"
              className="header-img"
              fill
              priority
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <h1>IES CURA VALERA</h1>
            <p>Formando futuro en Huércal-Overa</p>
          </div>
        </section>

        {/* Contenedor principal: Estructura de dos columnas con contenido y barra lateral */}
        <div className="main-layout container">
          {/* Área de contenido principal: Renderiza las páginas dinámicas */}
          <main className="main-content">{children}</main>

          {/* Barra lateral: Muestra widgets y enlaces de interés */}
          <div className="sidebar-column">
            <Sidebar />
          </div>
        </div>

        {/* Pie de página: Información legal y enlaces de contacto */}
        <Footer />
      </body>
    </html>
  );
}
