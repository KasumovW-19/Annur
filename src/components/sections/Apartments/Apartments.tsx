import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { apartments, type Apartment } from "@/data/apartments";
import { WHATSAPP_URL } from "@/lib/constants";
import { formatPrice } from "@/lib/format";

import styles from "./Apartments.module.scss";

export function Apartments() {
  const [active, setActive] = useState<Apartment | null>(null);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="apartments" className={styles.apartments}>
      <Container>
        <Reveal>
          <SectionHeading
            light
            eyebrow="Планировки"
            title="Квартиры в МФК «АН-НУР»"
            description="Выберите планировку под ваш образ жизни — от компактных студий до просторных семейных квартир."
          />
        </Reveal>

        <div className={styles.grid}>
          {apartments.map((apartment, index) => (
            <Reveal key={apartment.id} delay={index * 0.05}>
              <article className={styles.card}>
                <button
                  type="button"
                  className={styles.imageWrap}
                  aria-label={`Открыть планировку: ${apartment.title}`}
                  onClick={() => setActive(apartment)}
                >
                  <Image
                    src={apartment.image}
                    alt={apartment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={styles.image}
                  />
                </button>

                <div className={styles.body}>
                  <p className={styles.rooms}>
                    {apartment.rooms}-комнатная · {apartment.area} м²
                  </p>
                  <h3>{apartment.title}</h3>

                  <div className={styles.meta}>
                    <div>
                      <span>Площадь</span>
                      <strong>{apartment.area} м²</strong>
                    </div>
                    <div>
                      <span>Цена</span>
                      <strong>{formatPrice(apartment.price)}</strong>
                    </div>
                    <div className={styles.metaWide}>
                      <span>Первоначальный взнос</span>
                      <strong>
                        {formatPrice(apartment.downPayment)}
                      </strong>
                    </div>
                  </div>

                  <Button
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.button}
                  >
                    Узнать подробнее
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active ? (
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className={styles.backdrop}
              aria-label="Закрыть"
              onClick={() => setActive(null)}
            />

            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className={styles.close}
                aria-label="Закрыть"
                onClick={() => setActive(null)}
              >
                <X size={22} strokeWidth={1.8} />
              </button>

              <div className={styles.modalImageWrap}>
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  className={styles.modalImage}
                  priority
                />
              </div>

              <p className={styles.modalCaption}>
                {active.title} · {active.area} м² ·{" "}
                {formatPrice(active.price)}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
