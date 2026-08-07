import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Building2,
  Bus,
  GraduationCap,
  Moon,
  MapPin,
  Play,
  Trees,
  X,
} from "lucide-react";

import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "./About.module.scss";

const VIDEO_SRC = "/videos/complex.mp4";
const VIDEO_POSTER = "/images/hero/annur-hero-desktop.jpeg";

const advantages = [
  {
    icon: Trees,
    title: "Пешеходный бульвар",
    text: "Рядом новый пешеходный бульвар для прогулок и отдыха",
  },
  {
    icon: Moon,
    title: "Рядом мечеть",
    text: "Удобное расположение рядом с мечетью",
  },
  {
    icon: Bus,
    title: "Транспортная развязка",
    text: "Удобная транспортная развязка и быстрый выход на проспекты",
  },
  {
    icon: MapPin,
    title: "Проспекты рядом",
    text: "Быстрый выход на старый и новый проспект Путина",
  },
  {
    icon: GraduationCap,
    title: "Школы и сады",
    text: "Школы и детские сады в шаговой доступности",
  },
  {
    icon: Building2,
    title: "Инфраструктура",
    text: "Больницы и вся необходимая инфраструктура рядом",
  },
];

const gallery = [
  {
    src: "/images/gallery/gallery-1.jpeg",
    alt: "Фасад МФК АН-НУР",
  },
  {
    src: "/images/gallery/gallery-2.jpeg",
    alt: "Архитектура комплекса",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Вид комплекса",
  },
  {
    src: "/images/gallery/gallery-4.jpeg",
    alt: "Территория МФК АН-НУР",
  },
];

export function About() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      videoRef.current?.pause();
      return;
    }

    const playVideo = async () => {
      try {
        await videoRef.current?.play();
      } catch {
        // Autoplay may be blocked; controls remain available.
      }
    };

    void playVideo();
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  return (
    <section id="about" className={styles.about}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="О комплексе"
            title="МФК «АН-НУР»"
            description="ул. Назарбаева, новый проспект Путина — современный многофункциональный комплекс в сердце нового Грозного."
          />
        </Reveal>

        <div className={styles.media}>
          <Reveal className={styles.videoBlock}>
            <button
              type="button"
              className={styles.videoFrame}
              aria-label="Открыть видеопрезентацию"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={VIDEO_POSTER}
                alt="Видеопрезентация МФК АН-НУР"
                fill
                sizes="(max-width: 900px) 100vw, 720px"
                className={styles.videoImage}
              />
              <span className={styles.play}>
                <Play size={28} fill="currentColor" />
              </span>
            </button>
            <p className={styles.videoCaption}>
              Видеопрезентация МФК «АН-НУР»
            </p>
          </Reveal>

          <Reveal className={styles.gallery} delay={0.1}>
            {gallery.map((item) => (
              <figure key={item.src} className={styles.galleryItem}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className={styles.galleryImage}
                />
              </figure>
            ))}
          </Reveal>
        </div>

        <div className={styles.advantages}>
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className={styles.card}>
                  <div className={styles.icon}>
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Видеопрезентация МФК АН-НУР"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className={styles.backdrop}
              aria-label="Закрыть видео"
              onClick={closeModal}
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
                onClick={closeModal}
              >
                <X size={22} strokeWidth={1.8} />
              </button>

              <video
                ref={videoRef}
                className={styles.modalVideo}
                controls
                playsInline
                autoPlay
                preload="auto"
                poster={VIDEO_POSTER}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
