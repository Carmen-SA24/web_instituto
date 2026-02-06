"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Importamos Image
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import styles from "./navbar.module.css"; // Import correcto en minúsculas

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <BSNavbar
      expand="lg"
      className={styles.navbar}
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid className={styles.container}>
        <BSNavbar.Brand as={Link} href="/" className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo_cura_valera.png" 
              alt="Logo IES Cura Valera"
              width={60}
              height={60}
              className={styles.logoImage}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className={styles.brandText}>IES CURA VALERA</span>
        </BSNavbar.Brand>

        {/* Botón de menú desplegable para dispositivos móviles */}
        <BSNavbar.Toggle aria-controls="navbar-nav" />

        {/* Contenedor principal de los elementos del menú */}
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Elemento de menú desplegable: Inicio */}
            <div className={`nav-item dropdown ${styles.hoverDropdown}`}>
              <Link
                href="/"
                className={`nav-link dropdown-toggle ${styles.navLink}`}
                role="button"
              >
                Inicio
              </Link>
              <div className={`dropdown-menu ${styles.dropdownMenu}`}>
                <Link href="#" className="dropdown-item">
                  Plan de Centro
                </Link>
                <Link href="#" className="dropdown-item">
                  Plan de Actuación Digital
                </Link>
                <Link href="#" className="dropdown-item">
                  Otros documentos de funcionamiento interno
                </Link>
              </div>
            </div>

            {/* Elemento de menú desplegable: Noticias */}
            <div className={`nav-item dropdown ${styles.hoverDropdown}`}>
              <Link
                href="/noticias"
                className={`nav-link dropdown-toggle ${styles.navLink}`}
                role="button"
              >
                Noticias
              </Link>
              <div className={`dropdown-menu ${styles.dropdownMenu}`}>
                <Link href="#" className="dropdown-item">
                  Jefatura de Estudios
                </Link>
                <Link href="#" className="dropdown-item">
                  Plan de Igualdad y Escuela
                </Link>
                <Link href="#" className="dropdown-item">
                  Trofeo Director
                </Link>
                <Link href="#" className="dropdown-item">
                  Adultos
                </Link>
                <Link href="#" className="dropdown-item">
                  Videos y Fotos
                </Link>
              </div>
            </div>

            {/* Elemento de menú desplegable: Oferta Educativa */}
            <div className={`nav-item dropdown ${styles.hoverDropdown}`}>
              <Link
                href="/oferta-educativa"
                className={`nav-link dropdown-toggle ${styles.navLink}`}
                role="button"
              >
                Oferta Educativa
              </Link>
              <div className={`dropdown-menu ${styles.dropdownMenu}`}>
                <Link href="#" className="dropdown-item">
                  Oferta Educativa
                </Link>
                <Link href="#" className="dropdown-item">
                  Departamentos
                </Link>
                <Link href="#" className="dropdown-item">
                  BTOPA
                </Link>
                <Link href="#" className="dropdown-item">
                  ESPA
                </Link>
              </div>
            </div>

            {/* Elemento de menú desplegable: Biblioteca Escolar */}
            <div className={`nav-item dropdown ${styles.hoverDropdown}`}>
              <Link
                href="/biblioteca"
                className={`nav-link dropdown-toggle ${styles.navLink}`}
                role="button"
              >
                Biblioteca Escolar
              </Link>
              <div className={`dropdown-menu ${styles.dropdownMenu}`}>
                <Link href="#" className="dropdown-item">
                  BiblioWeb
                </Link>
                <Link href="#" className="dropdown-item">
                  Blog
                </Link>
              </div>
            </div>

            {/* Enlace directo: Contacto */}
            <Nav.Link as={Link} href="/contacto" className={styles.navLink}>
              Contacto
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
