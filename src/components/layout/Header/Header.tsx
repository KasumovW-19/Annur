import { Container } from "@/components/ui/Container/Container";
import { WHATSAPP_URL } from "@/lib/constants";

import styles from "./Header.module.scss";

const links = [
  { href: "#about", label: "О комплексе" },
  { href: "#apartments", label: "Планировки" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a href="#hero" className={styles.logo} aria-label="ISMA">
          ISMA
        </a>

        <nav className={styles.navigation}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          WhatsApp
        </a>
      </Container>
    </header>
  );
}
