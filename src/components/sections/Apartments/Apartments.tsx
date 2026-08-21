import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { CalendarRange, Maximize2, Wallet, X } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { apartments, type Apartment } from "@/data/apartments";
import { formatPrice } from "@/lib/format";

import styles from "./Apartments.module.scss";

const ease = [0.22, 1, 0.36, 1] as const;

function whatsAppUrl(apartment: Apartment) {
  const text = `Здравствуйте! Хочу узнать подробнее о ${apartment.rooms}-комнатной квартире ${apartment.area} м² в МФК АН-НУР.`;
  return `https://wa.me/79639888885?text=${encodeURIComponent(text)}`;
}

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
      <LayoutGroup>
      <Container>
        <Reveal>
          <SectionHeading
            light
            eyebrow="Планировки"
            title="Квартиры в Грозном"
            description="Планировки недвижимости в МФК «АН-НУР»: 1- и 2-комнатные квартиры в Грозном с рассрочкой на 72 месяца."
          />
        </Reveal>

        <div className={styles.grid}>
          {apartments.map((apartment, index) => (
            <motion.article
              key={apartment.id}
              className={styles.card}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
            >
              <button
                type="button"
                className={styles.imageWrap}
                aria-label={`Открыть планировку: ${apartment.title}, ${apartment.area} м²`}
                onClick={() => setActive(apartment)}
              >
                <motion.span
                  className={styles.imageStage}
                  layoutId={`plan-${apartment.id}`}
                  transition={{ duration: 0.45, ease }}
                >
                  <Image
                    src={apartment.image}
                    alt={`${apartment.title} ${apartment.area} м² — квартиры в Грозном, МФК АН-НУР`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`${styles.image} ${
                      apartment.imageFit === "contain"
                        ? styles.imageContain
                        : ""
                    }`}
                  />
                </motion.span>

                <span className={styles.areaBadge}>
                  {apartment.area} м²
                </span>

                <span className={styles.viewHint}>
                  <Maximize2 size={16} strokeWidth={1.8} />
                  Смотреть планировку
                </span>
              </button>

              <div className={styles.body}>
                <p className={styles.rooms}>
                  {apartment.rooms}-комнатная
                </p>
                <h3>{apartment.title}</h3>

                <p className={styles.price}>
                  <span>Ежемесячно</span>
                  <strong>{formatPrice(apartment.price)}</strong>
                </p>

                <ul className={styles.perks}>
                  {apartment.termMonths ? (
                    <li>
                      <CalendarRange size={16} strokeWidth={1.8} />
                      На {apartment.termMonths} месяца
                    </li>
                  ) : null}
                  {apartment.deferredPayment && apartment.deferredYears ? (
                    <li>
                      <Wallet size={16} strokeWidth={1.8} />
                      {formatPrice(apartment.deferredPayment)} на{" "}
                      {apartment.deferredYears} лет
                    </li>
                  ) : (
                    <li>
                      <Wallet size={16} strokeWidth={1.8} />
                      Взнос {formatPrice(apartment.downPayment)}
                    </li>
                  )}
                </ul>

                <Button
                  href={whatsAppUrl(apartment)}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.button}
                >
                  Узнать подробнее
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active ? (
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="apartment-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              className={styles.backdrop}
              aria-label="Закрыть"
              onClick={() => setActive(null)}
            />

            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease }}
            >
              <button
                type="button"
                className={styles.close}
                aria-label="Закрыть"
                onClick={() => setActive(null)}
              >
                <X size={22} strokeWidth={1.8} />
              </button>

              <div className={styles.modalLayout}>
                <div className={styles.modalImageWrap}>
                  <motion.div
                    className={styles.modalImageStage}
                    layoutId={`plan-${active.id}`}
                    transition={{ duration: 0.45, ease }}
                  >
                    <Image
                      src={active.image}
                      alt={`${active.title} ${active.area} м² — планировка квартиры в Грозном`}
                      fill
                      sizes="(max-width: 900px) 100vw, 720px"
                      className={styles.modalImage}
                      priority
                    />
                  </motion.div>
                </div>

                <div className={styles.modalInfo}>
                  <p className={styles.rooms}>{active.rooms}-комнатная</p>
                  <h3 id="apartment-modal-title">{active.title}</h3>

                  <p className={styles.price}>
                    <span>Ежемесячно</span>
                    <strong>{formatPrice(active.price)}</strong>
                  </p>

                  <ul className={styles.modalMeta}>
                    <li>
                      <span>Площадь</span>
                      <strong>{active.area} м²</strong>
                    </li>
                    {active.termMonths ? (
                      <li>
                        <span>Рассрочка</span>
                        <strong>На {active.termMonths} месяца</strong>
                      </li>
                    ) : null}
                    {active.deferredPayment && active.deferredYears ? (
                      <li>
                        <span>Отложенный платёж</span>
                        <strong>
                          {formatPrice(active.deferredPayment)} на{" "}
                          {active.deferredYears} лет
                        </strong>
                      </li>
                    ) : (
                      <li>
                        <span>Первоначальный взнос</span>
                        <strong>{formatPrice(active.downPayment)}</strong>
                      </li>
                    )}
                  </ul>

                  <Button
                    href={whatsAppUrl(active)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.button}
                  >
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
