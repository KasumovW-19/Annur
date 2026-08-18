import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
