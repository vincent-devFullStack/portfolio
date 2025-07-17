import { g as getCollection } from '../chunks/_astro_content_DD6YMZfo.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const pages = [
    { url: "", priority: "1.0", changefreq: "monthly", lastmod: today },
    { url: "about/", priority: "0.7", changefreq: "yearly", lastmod: today },
    { url: "work/", priority: "0.8", changefreq: "monthly", lastmod: today }
  ];
  const projects = await getCollection("work");
  projects.forEach((project) => {
    pages.push({
      url: `work/${project.id}/`,
      priority: "0.6",
      changefreq: "yearly",
      lastmod: project.data.publishDate?.toISOString().split("T")[0] ?? today
    });
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(
    (page) => `
  <url>
    <loc>https://www.vince-dev.fr/${encodeURI(page.url)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  ).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
