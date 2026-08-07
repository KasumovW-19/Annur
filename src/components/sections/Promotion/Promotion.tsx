import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { PROMOTION_END_DATE, WHATSAPP_URL } from "@/lib/constants";
import { padTime } from "@/lib/format";

import styles from "./Promotion.module.scss";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

const initialTimeLeft: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: false,
};

function calculateTimeLeft(): TimeLeft {
  const difference = PROMOTION_END_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
}

export function Promotion() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTimeLeft);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(calculateTimeLeft());
    updateTimer();
    const intervalId = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="promotion" className={styles.promotion}>
      <Container>
        <Reveal>
          <div className={styles.card}>
            <div className={styles.decorativeLine} />

            <div className={styles.content}>
              <p className={styles.eyebrow}>Главный оффер</p>

              <h2 className={styles.title}>
                Рассрочка до 72 месяцев
                <span>Скидка 10% до 5 октября</span>
              </h2>

              <p className={styles.description}>
                Специальные условия в честь Дня города: скидка 10% от стоимости
                квартиры и удобная рассрочка без скрытых переплат.
              </p>

              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <strong>−10%</strong>
                  <span>Скидка на квартиру</span>
                </div>

                <div className={styles.benefit}>
                  <strong>72</strong>
                  <span>Месяца рассрочки</span>
                </div>

                <div className={styles.benefit}>
                  <strong>0 ₽</strong>
                  <span>Скрытых переплат</span>
                </div>
              </div>

              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Получить индивидуальный расчёт
              </Button>
            </div>

            <div className={styles.offer}>
              <div className={styles.discount}>
                <span>Скидка</span>
                <strong>10%</strong>
              </div>

              <div className={styles.offerDivider} />

              {!timeLeft.expired ? (
                <div className={styles.timer}>
                  <p className={styles.timerTitle}>До завершения акции</p>

                  <div className={styles.timerGrid} aria-live="polite">
                    <div className={styles.timerItem}>
                      <strong>{padTime(timeLeft.days)}</strong>
                      <span>дней</span>
                    </div>

                    <div className={styles.timerItem}>
                      <strong>{padTime(timeLeft.hours)}</strong>
                      <span>часов</span>
                    </div>

                    <div className={styles.timerItem}>
                      <strong>{padTime(timeLeft.minutes)}</strong>
                      <span>минут</span>
                    </div>

                    <div className={styles.timerItem}>
                      <strong>{padTime(timeLeft.seconds)}</strong>
                      <span>секунд</span>
                    </div>
                  </div>

                  <p className={styles.deadline}>
                    Предложение действует до 5 октября 2026 года в честь Дня
                    города
                  </p>
                </div>
              ) : (
                <div className={styles.expired}>
                  <p>Акция завершена</p>
                  <span>Актуальные условия уточняйте у менеджера</span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
