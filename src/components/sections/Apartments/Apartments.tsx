import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import {
  apartments,
  type ApartmentRooms,
} from "@/data/apartments";
import { WHATSAPP_URL } from "@/lib/constants";
import { formatPrice } from "@/lib/format";

import styles from "./Apartments.module.scss";

type FilterValue = "all" | ApartmentRooms;

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Все" },
  { value: 1, label: "1-комнатные" },
  { value: 2, label: "2-комнатные" },
  { value: 3, label: "3-комнатные" },
];

export function Apartments() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return apartments;
    return apartments.filter((item) => item.rooms === filter);
  }, [filter]);

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

        <Reveal>
          <div className={styles.filters} role="tablist">
            {filters.map((item) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={filter === item.value}
                className={`${styles.filter} ${
                  filter === item.value ? styles.active : ""
                }`}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.grid}>
          {filtered.map((apartment, index) => (
            <Reveal key={apartment.id} delay={index * 0.05}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={apartment.image}
                    alt={apartment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={styles.image}
                  />
                </div>

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
    </section>
  );
}
