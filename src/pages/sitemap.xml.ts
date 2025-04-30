import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const pages = [
    { url: "", priority: "1.0", changefreq: "monthly", lastmod: "2025-04-27" },
    {
      url: "about",
      priority: "0.7",
      changefreq: "yearly",
      lastmod: "2025-04-27",
    },
    {
      url: "work",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: "2025-04-27",
    },
  ];

  const projects = await getCollection("work");
  projects.forEach((project) => {
    pages.push({
      url: `work/${project.id}`,
      priority: "0.6",
      changefreq: "yearly",
      lastmod:
        project.data.publishDate?.toISOString().split("T")[0] ?? "2025-04-27",
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
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
