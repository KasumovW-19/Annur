export const WHATSAPP_URL =
  "https://wa.me/79639888885?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%9C%D0%A4%D0%9A%20%D0%90%D0%9D-%D0%9D%D0%A3%D0%A0";

export const INSTAGRAM_URL = "https://instagram.com/isma.groznyy";
export const PHONE = "+79639888885";
export const PHONE_DISPLAY = "+7 963 988-88-85";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mfk-annur.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "ISMA — МФК АН-НУР";
export const ADDRESS_STREET = "ул. Назарбаева, новый проспект Путина";
export const ADDRESS_CITY = "Грозный";
export const ADDRESS_REGION = "Чеченская Республика";
export const GEO_LATITUDE = 43.318;
export const GEO_LONGITUDE = 45.695;

export const PROMOTION_END_DATE = new Date(
  "2026-10-05T23:59:59+03:00",
).getTime();

export const DISCOUNT_PERCENT = 10;
export const DOWN_PAYMENT_PER_M2 = 10_000;
export const INSTALLMENT_MONTHS = 72;
export const DEFAULT_PRICE_PER_M2 = 165_000;
export const DEFERRED_PAYMENT = 1_000_000;
export const DEFERRED_PAYMENT_YEARS = 5;
