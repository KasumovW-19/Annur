import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";

import styles from "./Description.module.scss";

const highlights = [
  { value: "от 61 м²", label: "Площадь квартир" },
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
              Квартиры в Грозном с комфортными планировками
            </h2>
            <p className={styles.text}>
              МФК «АН-НУР» — недвижимость в Грозном: современные квартиры,
              выгодные условия покупки и развитая инфраструктура в центре
              нового города.
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
      </Container>
    </section>
  );
}
