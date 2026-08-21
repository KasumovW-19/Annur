import { Container } from "@/components/ui/Container/Container";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div>
          <a href="#hero" className={styles.logo} aria-label="ISMA — недвижимость в Грозном">
            ISMA
          </a>
          <p className={styles.copy}>
            Недвижимость в Грозном. Квартиры в МФК «АН-НУР» — рассрочка
            до 72 месяцев.
          </p>
          <address className={styles.address}>
            Грозный, ул. Назарбаева, новый проспект Путина
          </address>
        </div>

        <div className={styles.links}>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#apartments">Квартиры</a>
          <a href="#calculator">Калькулятор</a>
        </div>
      </Container>
    </footer>
  );
}
