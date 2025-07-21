import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "monthly", lastmod: today },
    { url: "about", priority: "0.7", changefreq: "yearly", lastmod: today },
    { url: "work", priority: "0.8", changefreq: "monthly", lastmod: today },
  ];

  const projects = await getCollection("work");

  const dynamicPages = projects.map((project) => ({
    url: `work/${project.id}`, // sans slash final
    priority: "0.6",
    changefreq: "yearly",
    lastmod: project.data.publishDate?.toISOString().split("T")[0] ?? today,
  }));

  const allPages = [...staticPages, ...dynamicPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>https://www.vince-dev.fr/${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
