import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/constants";

import styles from "./WhatsAppFloat.module.scss";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={styles.float}
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  );
}
