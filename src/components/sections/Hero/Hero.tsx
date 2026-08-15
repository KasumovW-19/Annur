import { getImageProps } from "next/image";
import { motion } from "motion/react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

import styles from "./Hero.module.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const {
    props: { srcSet, ...imageProps },
  } = getImageProps({
    alt: "МФК АН-НУР в Грозном",
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
    src: "/images/common/hero.jpeg",
    width: 1920,
    height: 1080,
    quality: 85,
  });

  return (
    <section id="hero" className={styles.hero}>
      <picture className={styles.background}>
        <source srcSet={srcSet} />
        <img
          {...imageProps}
          className={styles.backgroundImage}
          alt="МФК АН-НУР в Грозном"
        />
      </picture>

      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <motion.p
            className={styles.brand}
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            ISMA
          </motion.p>

          <motion.h1
            className={styles.title}
            custom={0.22}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Лучшие эксклюзивы рынка недвижимости
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            custom={0.36}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Презентация нового многофункционального комплекса МФК «АН-НУР» в
            Грозном.
          </motion.p>

          <motion.div
            className={styles.actions}
            custom={0.48}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </Button>

            <Button
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              Instagram
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
