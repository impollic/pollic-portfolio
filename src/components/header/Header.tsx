import { useState } from "react";
import styles from "./header.module.css";

export default function Header({
  idioma,
  setIdioma,
}: {
  idioma: string;
  setIdioma: (idioma: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const Textos = {
    inicio: ["Início", "Home"],
    sobre: ["Sobre", "About"],
    ferramentas: ["Ferramentas", "Tools"],
    projetos: ["Projetos", "Projects"],
    contato: ["Contato", "Contact"],
  };

  const i = idioma === "pt" ? 0 : 1;

  const links = [
    { href: "#Tela-Inicial", label: Textos.inicio[i] },
    { href: "#Sobre", label: Textos.sobre[i] },
    { href: "#Ferramentas", label: Textos.ferramentas[i] },
    { href: "#Projetos", label: Textos.projetos[i] },
    { href: "#Contato", label: Textos.contato[i] },
  ];

  return (
    <header className={styles.header}>
      <section className={styles.headerFirst}>
        <h1 className={styles.headerTitle}>Pollic Website</h1>
      </section>

      <nav className={styles.headerSecond}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} className={styles.headerLink}>
            {label}
          </a>
        ))}
      </nav>

      <section className={styles.headerThird}>
        <button
          className={`${styles.headerButton} ${idioma === "en" ? styles.headerButtonActive : ""}`}
          onClick={() => setIdioma("en")}
        >
          English
        </button>
        <button
          className={`${styles.headerButton} ${idioma === "pt" ? styles.headerButtonActive : ""}`}
          onClick={() => setIdioma("pt")}
        >
          Português
        </button>
      </section>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={menuOpen ? styles.barOpen1 : ""} />
        <span className={menuOpen ? styles.barOpen2 : ""} />
        <span className={menuOpen ? styles.barOpen3 : ""} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className={styles.mobileLangs}>
            <button
              className={`${styles.headerButton} ${idioma === "en" ? styles.headerButtonActive : ""}`}
              onClick={() => {
                setIdioma("en");
                setMenuOpen(false);
              }}
            >
              English
            </button>
            <button
              className={`${styles.headerButton} ${idioma === "pt" ? styles.headerButtonActive : ""}`}
              onClick={() => {
                setIdioma("pt");
                setMenuOpen(false);
              }}
            >
              Português
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
