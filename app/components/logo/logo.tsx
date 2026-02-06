import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

interface LogoProps {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
}

export default function Logo({ 
  src, 
  alt, 
  href, 
  width = 60, 
  height = 60 
}: LogoProps) {
  return (
    <Link 
      href={href} 
      className={styles.logoLink}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.logoImage}
      />
    </Link>
  );
}
