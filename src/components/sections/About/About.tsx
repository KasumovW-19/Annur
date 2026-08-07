import Image from "next/image";
import {
  Building2,
  Bus,
  GraduationCap,
  Moon,
  MapPin,
  Play,
  Trees,
} from "lucide-react";

import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { INSTAGRAM_URL } from "@/lib/constants";

import styles from "./About.module.scss";

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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.videoFrame}
              aria-label="Смотреть презентацию комплекса"
            >
              <Image
                src="/images/hero/annur-hero-desktop.jpeg"
                alt="Видеопрезентация МФК АН-НУР"
                fill
                sizes="(max-width: 900px) 100vw, 720px"
                className={styles.videoImage}
              />
              <span className={styles.play}>
                <Play size={28} fill="currentColor" />
              </span>
            </a>
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
    </section>
  );
}
