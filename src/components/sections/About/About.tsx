import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Building2,
  Bus,
  ChevronLeft,
  ChevronRight,
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
    text: "Находится на пешеходном бульваре и удобный выход на старый и новый проспект",
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
    src: "/images/plan/plan-1.jpeg",
    alt: "Жилой комплекс АН-НУР в Грозном — визуализация фасада",
  },
  {
    src: "/images/plan/plan-2.jpeg",
    alt: "Квартиры в Грозном, МФК АН-НУР — вид на комплекс",
  },
  {
    src: "/images/plan/plan-3.jpeg",
    alt: "Недвижимость в Грозном — двор и архитектура АН-НУР",
  },
  {
    src: "/images/plan/plan-4.jpeg",
    alt: "МФК АН-НУР в Грозном — корпуса жилого комплекса",
  },
  {
    src: "/images/plan/plan-5.jpeg",
    alt: "Новостройка в Грозном АН-НУР — вечерняя визуализация",
  },
  {
    src: "/images/plan/plan-6.jpeg",
    alt: "Квартиры в новом Грозном — МФК АН-НУР со стороны бульвара",
  },
  {
    src: "/images/plan/plan-7.jpeg",
    alt: "Жилой комплекс АН-НУР — инфраструктура и территория",
  },
  {
    src: "/images/plan/plan-8.jpeg",
    alt: "Недвижимость Грозный — МФК АН-НУР к сдаче 2026",
  },
];

export function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isGalleryOpen = galleryIndex !== null;
  const isModalOpen = isVideoOpen || isGalleryOpen;
  const activeImage =
    galleryIndex !== null ? gallery[galleryIndex] : null;

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
        setGalleryIndex(null);
        return;
      }

      if (galleryIndex === null) return;

      if (event.key === "ArrowLeft") {
        setGalleryIndex(
          (galleryIndex - 1 + gallery.length) % gallery.length,
        );
      }

      if (event.key === "ArrowRight") {
        setGalleryIndex((galleryIndex + 1) % gallery.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen, galleryIndex]);

  useEffect(() => {
    if (!isVideoOpen) {
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
  }, [isVideoOpen]);

  const closeVideo = () => setIsVideoOpen(false);
  const closeGallery = () => setGalleryIndex(null);

  const showPrev = () => {
    if (galleryIndex === null) return;
    setGalleryIndex(
      (galleryIndex - 1 + gallery.length) % gallery.length,
    );
  };

  const showNext = () => {
    if (galleryIndex === null) return;
    setGalleryIndex((galleryIndex + 1) % gallery.length);
  };

  return (
    <section id="about" className={styles.about}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="О комплексе"
            title="МФК «АН-НУР» — недвижимость в Грозном"
            description="ул. Назарбаева, новый проспект Путина — квартиры в сердце нового Грозного, рядом с бульваром, школами и инфраструктурой."
          />
        </Reveal>

        <div className={styles.media}>
          <Reveal className={styles.videoBlock}>
            <button
              type="button"
              className={styles.videoFrame}
              aria-label="Открыть видеопрезентацию"
              onClick={() => setIsVideoOpen(true)}
            >
              <Image
                src={VIDEO_POSTER}
                alt="Видеопрезентация недвижимости МФК АН-НУР в Грозном"
                fill
                sizes="(max-width: 900px) 100vw, 1120px"
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
        </div>

        <Reveal>
          <div className={styles.galleryHeader}>
            <p className={styles.galleryEyebrow}>Визуализация</p>
            <h3 className={styles.galleryTitle}>
              Как будет выглядеть комплекс к сдаче
            </h3>
          </div>
        </Reveal>

        <Reveal className={styles.gallery} delay={0.08}>
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={styles.galleryItem}
              aria-label={`Открыть фото: ${item.alt}`}
              onClick={() => setGalleryIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={styles.galleryImage}
              />
            </button>
          ))}
        </Reveal>

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
        {isVideoOpen ? (
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
              onClick={closeVideo}
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
                onClick={closeVideo}
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

      <AnimatePresence>
        {isGalleryOpen && activeImage ? (
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className={styles.backdrop}
              aria-label="Закрыть фото"
              onClick={closeGallery}
            />

            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              aria-label="Предыдущее фото"
              onClick={showPrev}
            >
              <ChevronLeft size={28} strokeWidth={1.6} />
            </button>

            <motion.div
              key={activeImage.src}
              className={`${styles.modalContent} ${styles.imageModalContent}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className={styles.close}
                aria-label="Закрыть"
                onClick={closeGallery}
              >
                <X size={22} strokeWidth={1.8} />
              </button>

              <div className={styles.modalImageWrap}>
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className={styles.modalImage}
                  priority
                />
              </div>

              <p className={styles.modalCounter}>
                {(galleryIndex ?? 0) + 1} / {gallery.length}
              </p>
            </motion.div>

            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              aria-label="Следующее фото"
              onClick={showNext}
            >
              <ChevronRight size={28} strokeWidth={1.6} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
