import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { faqs } from "@/data/faq";

import styles from "./Faq.module.scss";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.faq}>
      <Container>
        <Reveal>
          <SectionHeading
            light
            eyebrow="FAQ"
            title="Частые вопросы"
            description="Ответы на вопросы о покупке квартиры и недвижимости в Грозном — МФК «АН-НУР»."
          />
        </Reveal>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={styles.chevron}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className={styles.content}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
