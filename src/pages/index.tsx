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
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat/WhatsAppFloat";

const SITE_TITLE =
  "ISMA — МФК «АН-НУР» | Квартиры в Грозном с рассрочкой до 72 месяцев";

const SITE_DESCRIPTION =
  "МФК «АН-НУР» от ISMA в Грозном: скидка 10% до 5 октября, рассрочка до 72 месяцев, сдача 5 октября 2026. ул. Назарбаева, новый проспект Путина.";

const OG_TITLE = "ISMA — МФК «АН-НУР» в Грозном";
const OG_DESCRIPTION =
  "Эксклюзивные квартиры в МФК «АН-НУР»: скидка 10%, рассрочка 72 месяца, сдача 5 октября 2026.";
const OG_IMAGE = "/og-image.jpg";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="keywords"
          content="ISMA, АН-НУР, МФК АН-НУР, квартиры Грозный, купить квартиру Грозный, рассрочка, новостройка"
        />
        <meta name="author" content="ISMA" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ISMA — МФК АН-НУР" />
        <meta property="og:title" content={OG_TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="МФК АН-НУР — визуализация комплекса" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={OG_TITLE} />
        <meta name="twitter:description" content={OG_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <link rel="canonical" href="/" />
      </Head>

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
