import { Container } from "@/components/ui/Container/Container";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div>
          <a href="#hero" className={styles.logo}>
            ISMA
          </a>
          <p className={styles.copy}>
            Лучшие эксклюзивы рынка недвижимости. МФК «АН-НУР», Грозный.
          </p>
        </div>

        <div className={styles.links}>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#apartments">Планировки</a>
          <a href="#calculator">Калькулятор</a>
        </div>
      </Container>
    </footer>
  );
}
