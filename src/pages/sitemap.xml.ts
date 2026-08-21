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
  const loc = origin ? `${origin}/` : "/";
  const lastmod = new Date().toISOString().slice(0, 10);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(body);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}