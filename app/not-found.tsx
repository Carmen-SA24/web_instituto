import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="not-found-container"
      style={{
        textAlign: "center",
        padding: "60px 20px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          marginBottom: "20px",
        }}
      >
        <Image
          src="/404.png"
          alt="Página no encontrada"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "800",
          color: "var(--primary)",
          marginBottom: "10px",
        }}
      >
        ¡Vaya! Página no encontrada
      </h1>

      <p
        style={{
          color: "var(--gray)",
          fontSize: "1.2rem",
          maxWidth: "500px",
          marginBottom: "30px",
          lineHeight: "1.6",
        }}
      >
        Parece que te has perdido por los pasillos del instituto. La página que
        buscas no existe o ha sido movida.
      </p>

      <Link
        href="/"
        style={{
          padding: "12px 28px",
          backgroundColor: "var(--primary)",
          color: "white",
          textDecoration: "none",
          borderRadius: "50px",
          fontWeight: "600",
          boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.2)",
          transition: "transform 0.2s",
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
