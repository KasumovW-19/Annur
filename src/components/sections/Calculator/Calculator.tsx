import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import {
  DEFAULT_PRICE_PER_M2,
  DEFERRED_PAYMENT,
  DEFERRED_PAYMENT_YEARS,
  DISCOUNT_PERCENT,
  DOWN_PAYMENT_PER_M2,
  INSTALLMENT_MONTHS,
  WHATSAPP_URL,
} from "@/lib/constants";
import { formatPrice } from "@/lib/format";

import styles from "./Calculator.module.scss";

function parseValue(value: string) {
  const normalized = value.trim().replace(",", ".");

  if (!normalized) return 0;

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function Calculator() {
  const [area, setArea] = useState("58");
  const [pricePerM2, setPricePerM2] = useState(
    String(DEFAULT_PRICE_PER_M2),
  );
  const [downPayment, setDownPayment] = useState(
    String(58 * DOWN_PAYMENT_PER_M2),
  );
  const [withDeferredPayment, setWithDeferredPayment] = useState(true);

  const result = useMemo(() => {
    const areaValue = parseValue(area);
    const priceValue = parseValue(pricePerM2);
    const downPaymentValue = parseValue(downPayment);
    const deferredPaymentValue = withDeferredPayment
      ? DEFERRED_PAYMENT
      : 0;
    const basePrice = areaValue * priceValue;
    const discount = basePrice * (DISCOUNT_PERCENT / 100);
    const finalPrice = basePrice - discount;
    const monthly =
      Math.max(
        finalPrice - downPaymentValue - deferredPaymentValue,
        0,
      ) / INSTALLMENT_MONTHS;

    return {
      basePrice,
      discount,
      finalPrice,
      downPayment: downPaymentValue,
      deferredPayment: deferredPaymentValue,
      monthly,
      minDownPayment: areaValue * DOWN_PAYMENT_PER_M2,
    };
  }, [area, pricePerM2, downPayment, withDeferredPayment]);

  return (
    <section id="calculator" className={styles.calculator}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Калькулятор"
            title="Рассчитайте стоимость квартиры"
            description="Рассчитайте стоимость квартиры в Грозном: скидка 10% и рассрочка на 72 месяца."
          />
        </Reveal>

        <Reveal>
          <div className={styles.panel}>
            <div className={styles.controls}>
              <label className={styles.field}>
                <span>Площадь квартиры, м²</span>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="Например, 58"
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                />
              </label>

              <label className={styles.field}>
                <span>Цена за м², ₽</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Например, 165000"
                  value={pricePerM2}
                  onChange={(event) => setPricePerM2(event.target.value)}
                />
              </label>

              <label className={styles.field}>
                <span>Первоначальный взнос, ₽</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Например, 580000"
                  value={downPayment}
                  onChange={(event) => setDownPayment(event.target.value)}
                />
              </label>

              <div className={styles.toggleField}>
                <span className={styles.toggleLabel}>Отложенный платёж</span>
                <p className={styles.toggleHint}>
                  {formatPrice(DEFERRED_PAYMENT)} на {DEFERRED_PAYMENT_YEARS}{" "}
                  лет
                </p>
                <div className={styles.toggle} role="group">
                  <button
                    type="button"
                    className={`${styles.toggleOption} ${
                      withDeferredPayment ? styles.toggleActive : ""
                    }`}
                    aria-pressed={withDeferredPayment}
                    onClick={() => setWithDeferredPayment(true)}
                  >
                    С платежом
                  </button>
                  <button
                    type="button"
                    className={`${styles.toggleOption} ${
                      !withDeferredPayment ? styles.toggleActive : ""
                    }`}
                    aria-pressed={!withDeferredPayment}
                    onClick={() => setWithDeferredPayment(false)}
                  >
                    Без платежа
                  </button>
                </div>
              </div>

              <p className={styles.hint}>
                Минимальный взнос — {formatPrice(DOWN_PAYMENT_PER_M2)} за 1 м²
                {result.minDownPayment > 0
                  ? ` (от ${formatPrice(result.minDownPayment)})`
                  : ""}
                . Скидка {DISCOUNT_PERCENT}% действует до 5 октября.
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
                <span>
                  Отложенный платёж ({DEFERRED_PAYMENT_YEARS} лет)
                </span>
                <strong>
                  {withDeferredPayment
                    ? formatPrice(DEFERRED_PAYMENT)
                    : "Без платежа"}
                </strong>
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
