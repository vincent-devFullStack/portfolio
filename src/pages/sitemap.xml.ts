import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    site = new URL("https://www.vince-dev.fr");
  }

  const isoNow = new Date().toISOString();

  const STATIC_PAGES = [
    { path: "/", changefreq: "monthly", priority: "1.0", lastmod: isoNow },
    { path: "/about/", changefreq: "yearly", priority: "0.7", lastmod: isoNow },
    { path: "/work/", changefreq: "monthly", priority: "0.8", lastmod: isoNow },
  ];

  const allWork = await getCollection("work");

  type WorkData = {
    title: string;
    description: string;
    publishDate: Date;
    tags: string[];
    img: string;
    pinned: boolean;
    isMini: boolean;
    img_alt?: string;
    demo?: string;
    imgMobile?: string;
    rank?: number;
    draft?: boolean;
    isPrivate?: boolean;
  };

  const published = allWork.filter(
    (e: { data: WorkData }) =>
      e.data?.draft !== true && e.data?.isPrivate !== true
  );

  published.sort((a, b) => {
    const ad =
      a.data.publishDate instanceof Date ? a.data.publishDate.getTime() : 0;
    const bd =
      b.data.publishDate instanceof Date ? b.data.publishDate.getTime() : 0;
    return bd - ad;
  });

  const DYNAMIC_PAGES = published.map((p) => ({
    path: `/work/${p.id}/`,
    changefreq: "yearly",
    priority: "0.6",
    lastmod: (p.data.publishDate instanceof Date
      ? p.data.publishDate
      : new Date()
    ).toISOString(),
  }));

  const entries = [...STATIC_PAGES, ...DYNAMIC_PAGES];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map((e) => {
        const loc = new URL(e.path, site!).toString();
        return `  <url>
    <loc>${loc}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
    <lastmod>${e.lastmod}</lastmod>
  </url>`;
      })
      .join("\n") +
    `\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
