import type { GetServerSideProps } from "next";

import { SITE_URL } from "@/lib/constants";

function siteOrigin(host?: string, proto?: string) {
  if (SITE_URL) return SITE_URL;
  if (!host) return "";
  const protocol = proto === "http" ? "http" : "https";
  return `${protocol}://${host}`;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}) => {
  const origin = siteOrigin(
    req.headers.host,
    String(req.headers["x-forwarded-proto"] || "https"),
  );
  const body = `User-agent: *
Allow: /

User-agent: Yandex
Allow: /

User-agent: Googlebot
Allow: /

Disallow: /api/
${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ""}`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(body);
  res.end();

  return { props: {} };
};

export default function Robots() {
  return null;
}