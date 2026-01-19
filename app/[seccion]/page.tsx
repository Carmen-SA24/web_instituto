import { notFound } from "next/navigation";
import NoticiasContent from "@/app/components/secciones/Noticias";
import OfertaContent from "@/app/components/secciones/Oferta";
import BibliotecaContent from "@/app/components/secciones/Biblioteca";
import ContactoContent from "@/app/components/secciones/Contacto";

interface PageProps {
  params: Promise<{
    seccion: string;
  }>;
}

// Componente de página dinámica: Maneja el renderizado de secciones basado en la URL.
export default async function DynamicSectionPage({ params }: PageProps) {
  // Paso 1: Extraer el parámetro de sección de la URL actual.
  const { seccion } = await params;

  // Paso 2: Seleccionar y renderizar el componente específico para la sección solicitada.
  switch (seccion) {
    case "noticias":
      return <NoticiasContent />;

    case "oferta-educativa":
      return <OfertaContent />;

    case "biblioteca":
      return <BibliotecaContent />;

    case "contacto":
      return <ContactoContent />;

    default:
      // Paso 3: Redirigir a la página 404 si la sección no es válida.
      notFound();
  }
}

// Generación de parámetros estáticos: Pre-renderiza estas rutas durante la construcción para optimizar el rendimiento.
export async function generateStaticParams() {
  return [
    { seccion: "noticias" },
    { seccion: "oferta-educativa" },
    { seccion: "biblioteca" },
    { seccion: "contacto" },
  ];
}
