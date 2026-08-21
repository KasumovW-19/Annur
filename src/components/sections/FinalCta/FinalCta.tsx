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
            <h2>Консультация по недвижимости в Грозном</h2>
            <p className={styles.text}>
              Менеджер ISMA ответит на вопросы о планировках, рассрочке
              и поможет купить квартиру в Грозном в МФК «АН-НУР».
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
