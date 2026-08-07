import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";

import styles from "./Description.module.scss";

const highlights = [
  { value: "от 38 м²", label: "Площадь квартир" },
  { value: "Центр", label: "Нового Грозного" },
  { value: "05.10.2026", label: "Срок сдачи" },
];

export function Description() {
  return (
    <section id="description" className={styles.description}>
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <p className={styles.eyebrow}>О проекте</p>
            <h2 className={styles.title}>
              Современный жилой комплекс с комфортными планировками
            </h2>
            <p className={styles.text}>
              МФК «АН-НУР» — современный жилой комплекс с комфортными
              планировками, выгодными условиями покупки и развитой
              инфраструктурой вокруг.
            </p>
          </Reveal>

          <Reveal delay={0.12} className={styles.highlights}>
            {highlights.map((item) => (
              <div key={item.label} className={styles.highlight}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className={styles.delivery}>
            <div>
              <p className={styles.deliveryEyebrow}>Ключевые даты</p>
              <h3>Сдача комплекса — 5 октября 2026 года</h3>
              <p>Вместе с открытием нового пешеходного бульвара</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
