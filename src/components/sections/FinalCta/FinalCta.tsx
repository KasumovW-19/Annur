import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

import styles from "./FinalCta.module.scss";

export function FinalCta() {
  return (
    <section id="contact" className={styles.finalCta}>
      <Container>
        <Reveal>
          <div className={styles.inner}>
            <p className={styles.eyebrow}>Консультация</p>
            <h2>Получите консультацию по покупке квартиры</h2>
            <p className={styles.text}>
              Менеджер ISMA ответит на вопросы о планировках, условиях
              рассрочки и поможет подобрать квартиру в МФК «АН-НУР».
            </p>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Написать в WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
