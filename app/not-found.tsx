import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/404.png"
          alt="Página no encontrada"
          fill
          className={styles.image}
          priority
        />
      </div>

      <h1 className={styles.title}>¡Vaya! Página no encontrada</h1>

      <p className={styles.text}>
        Parece que te has perdido por los pasillos del instituto. La página que
        buscas no existe o ha sido movida.
      </p>

      <Link href="/" className={styles.button}>
        Volver al Inicio
      </Link>
    </section>
  );
}
