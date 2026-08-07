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

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          ISMA — МФК «АН-НУР» | Квартиры в Грозном с рассрочкой до 72 месяцев
        </title>
        <meta
          name="description"
          content="МФК «АН-НУР» от ISMA в Грозном: скидка 10% до 5 октября, рассрочка до 72 месяцев, сдача 5 октября 2026. ул. Назарбаева, новый проспект Путина."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ISMA — МФК «АН-НУР» в Грозном" />
        <meta
          property="og:description"
          content="Эксклюзивные квартиры в МФК «АН-НУР»: скидка 10%, рассрочка 72 месяца, сдача 5 октября 2026."
        />
        <meta property="og:type" content="website" />
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
