import { apartments } from "@/data/apartments";
import { faqs } from "@/data/faq";
import {
  ADDRESS_CITY,
  ADDRESS_REGION,
  ADDRESS_STREET,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  INSTAGRAM_URL,
  PHONE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const origin = SITE_URL || "";
const pageUrl = origin ? `${origin}/` : "/";
const ogImagePath = "/og-image.jpg";

export const SEO = {
  title:
    "Недвижимость в Грозном — квартиры в МФК АН-НУР | ISMA",
  description:
    "Недвижимость в Грозном: купить квартиру в МФК «АН-НУР» от ISMA. Квартиры в Грозном с рассрочкой 72 месяца, скидка 10%, сдача 5 октября 2026. ул. Назарбаева.",
  keywords: [
    "недвижимость",
    "недвижимость Грозный",
    "квартиры Грозный",
    "купить квартиру Грозный",
    "новостройки Грозный",
    "квартиры в Грозном",
    "недвижимость в Грозном",
    "МФК АН-НУР",
    "АН-НУР Грозный",
    "ISMA",
    "рассрочка на квартиру",
    "жилой комплекс Грозный",
  ].join(", "),
  ogTitle: "Недвижимость в Грозном — квартиры МФК АН-НУР",
  ogDescription:
    "Квартиры в Грозном в МФК «АН-НУР»: рассрочка 72 месяца, скидка 10%, планировки от 61 м². Недвижимость в центре нового Грозного.",
  ogImage: origin ? `${origin}${ogImagePath}` : ogImagePath,
  ogImageAlt:
    "Недвижимость в Грозном — жилой комплекс МФК АН-НУР, квартиры от ISMA",
  canonical: pageUrl,
  locale: "ru_RU",
} as const;

function absoluteUrl(path: string) {
  if (!origin) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getJsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_STREET,
    addressLocality: ADDRESS_CITY,
    addressRegion: ADDRESS_REGION,
    addressCountry: "RU",
  };

  const geo = {
    "@type": "GeoCoordinates",
    latitude: GEO_LATITUDE,
    longitude: GEO_LONGITUDE,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": origin ? `${origin}/#website` : "#website",
        url: pageUrl,
        name: SITE_NAME,
        inLanguage: "ru-RU",
        description: SEO.description,
        publisher: { "@id": origin ? `${origin}/#organization` : "#organization" },
      },
      {
        "@type": "RealEstateAgent",
        "@id": origin ? `${origin}/#organization` : "#organization",
        name: "ISMA",
        url: pageUrl,
        telephone: PHONE,
        image: SEO.ogImage,
        sameAs: [INSTAGRAM_URL],
        address,
        areaServed: {
          "@type": "City",
          name: "Грозный",
        },
      },
      {
        "@type": "ApartmentComplex",
        "@id": origin ? `${origin}/#complex` : "#complex",
        name: "МФК АН-НУР",
        alternateName: ["АН-НУР", "МФК «АН-НУР»"],
        description:
          "Недвижимость в Грозном: многофункциональный комплекс АН-НУР. Квартиры в Грозном с рассрочкой до 72 месяцев.",
        url: pageUrl,
        image: SEO.ogImage,
        telephone: PHONE,
        address,
        geo,
        numberOfAccommodationUnits: apartments.length,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Пешеходный бульвар" },
          { "@type": "LocationFeatureSpecification", name: "Рассрочка 72 месяца" },
          { "@type": "LocationFeatureSpecification", name: "Отложенный платёж" },
        ],
      },
      {
        "@type": "ItemList",
        name: "Квартиры в Грозном — планировки МФК АН-НУР",
        itemListElement: apartments.map((apartment, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Apartment",
            name: `${apartment.title} ${apartment.area} м² в Грозном`,
            description: `${apartment.rooms}-комнатная квартира ${apartment.area} м² — недвижимость в Грозном, МФК АН-НУР`,
            numberOfRooms: apartment.rooms,
            floorSize: {
              "@type": "QuantitativeValue",
              value: apartment.area,
              unitCode: "MTK",
            },
            image: absoluteUrl(apartment.image),
            address,
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}