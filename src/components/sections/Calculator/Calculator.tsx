import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import {
  DEFAULT_PRICE_PER_M2,
  DISCOUNT_PERCENT,
  DOWN_PAYMENT_PER_M2,
  INSTALLMENT_MONTHS,
  WHATSAPP_URL,
} from "@/lib/constants";
import { formatPrice } from "@/lib/format";

import styles from "./Calculator.module.scss";

export function Calculator() {
  const [area, setArea] = useState(58);
  const [pricePerM2, setPricePerM2] = useState(DEFAULT_PRICE_PER_M2);

  const result = useMemo(() => {
    const basePrice = area * pricePerM2;
    const discount = basePrice * (DISCOUNT_PERCENT / 100);
    const finalPrice = basePrice - discount;
    const downPayment = area * DOWN_PAYMENT_PER_M2;
    const monthly =
      Math.max(finalPrice - downPayment, 0) / INSTALLMENT_MONTHS;

    return { basePrice, discount, finalPrice, downPayment, monthly };
  }, [area, pricePerM2]);

  return (
    <section id="calculator" className={styles.calculator}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Калькулятор"
            title="Рассчитайте стоимость квартиры"
            description="Укажите площадь и цену за м² — получите расчёт со скидкой 10% и рассрочкой на 72 месяца."
          />
        </Reveal>

        <Reveal>
          <div className={styles.panel}>
            <div className={styles.controls}>
              <label className={styles.field}>
                <span>Площадь квартиры, м²</span>
                <input
                  type="number"
                  min={20}
                  max={200}
                  step={0.1}
                  value={area}
                  onChange={(event) =>
                    setArea(Number(event.target.value) || 0)
                  }
                />
              </label>

              <label className={styles.field}>
                <span>Цена за м², ₽</span>
                <input
                  type="number"
                  min={50000}
                  max={500000}
                  step={1000}
                  value={pricePerM2}
                  onChange={(event) =>
                    setPricePerM2(Number(event.target.value) || 0)
                  }
                />
              </label>

              <p className={styles.hint}>
                Минимальный взнос — {formatPrice(DOWN_PAYMENT_PER_M2)} за 1 м².
                Скидка {DISCOUNT_PERCENT}% действует до 5 октября.
              </p>
            </div>

            <div className={styles.results}>
              <div className={styles.row}>
                <span>Стоимость без скидки</span>
                <strong>{formatPrice(result.basePrice)}</strong>
              </div>
              <div className={styles.row}>
                <span>Размер скидки ({DISCOUNT_PERCENT}%)</span>
                <strong className={styles.accent}>
                  −{formatPrice(result.discount)}
                </strong>
              </div>
              <div className={`${styles.row} ${styles.total}`}>
                <span>Итоговая цена</span>
                <strong>{formatPrice(result.finalPrice)}</strong>
              </div>
              <div className={styles.row}>
                <span>Первоначальный взнос</span>
                <strong>{formatPrice(result.downPayment)}</strong>
              </div>
              <div className={styles.row}>
                <span>Ежемесячный платёж ({INSTALLMENT_MONTHS} мес.)</span>
                <strong>{formatPrice(result.monthly)}</strong>
              </div>

              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Получить точный расчёт в WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
