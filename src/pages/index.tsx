import Head from "next/head";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { About } from "@/components/sections/About/About";
import { Apartments } from "@/components/sections/Apartments/Apartments";
import { Calculator } from "@/components/sections/Calculator/Calculator";
import { Description } from "@/components/sections/Description/Description";
import { FAQ } from "@/components/sections/Faq/Faq";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";
import { Hero } from "@/components/sections/Hero/Hero";
import { Promotion } from "@/components/sections/Promotion/Promotion";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat/WhatsAppFloat";
import {
  ADDRESS_CITY,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  SITE_NAME,
} from "@/lib/constants";
import { getJsonLd, SEO } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="author" content="ISMA" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="RU-CE" />
        <meta name="geo.placename" content={ADDRESS_CITY} />
        <meta
          name="geo.position"
          content={`${GEO_LATITUDE};${GEO_LONGITUDE}`}
        />
        <meta
          name="ICBM"
          content={`${GEO_LATITUDE}, ${GEO_LONGITUDE}`}
        />

        <meta property="og:locale" content={SEO.locale} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SEO.ogTitle} />
        <meta property="og:description" content={SEO.ogDescription} />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SEO.ogImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.ogTitle} />
        <meta name="twitter:description" content={SEO.ogDescription} />
        <meta name="twitter:image" content={SEO.ogImage} />
        <meta name="twitter:image:alt" content={SEO.ogImageAlt} />

        <link rel="canonical" href={SEO.canonical} />
      </Head>

      <JsonLd data={getJsonLd()} />

      <Header />

      <main>
        <Hero />
        <Promotion />
        <About />
        <Description />
        <Apartments />
        <Calculator />
        <FAQ />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}