export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://www.vince-dev.fr/sitemap.xml
`.trim();

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
