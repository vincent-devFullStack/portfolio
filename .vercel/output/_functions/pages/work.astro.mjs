import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_BiGf9yHu.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CeAgdsJu.mjs';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BSLhms9o.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_Dm58saKz.mjs';
import 'clsx';
/* empty css                                */
import { $ as $$Grid } from '../chunks/Grid_Bai5Kw9W.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, id } = Astro2.props.project;
  const isDone = data.title.includes("\u2705");
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${id}`, "href")} data-astro-cid-lgkm4u2a> ${isDone && renderTemplate`<span class="badge" data-astro-cid-lgkm4u2a>Terminé</span>`} <span class="title" data-astro-cid-lgkm4u2a>${data.title.replace(" \u2705", "")}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "Aper\xE7u du projet", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/PortfolioPreview.astro", void 0);

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const mainProjects = allProjects.filter((p) => !p.data.isMini);
  const miniProjects = allProjects.filter((p) => p.data.isMini);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mes Projets | Vincent SILVESTRI", "description": "D\xE9couvrez les projets r\xE9cents de Vincent Silvestri." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes Projets", "tagline": "D\xE9couvrez mes projets r\xE9cents pour mieux comprendre mon exp\xE9rience et mes comp\xE9tences.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": async ($$result3) => renderTemplate`${mainProjects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} ${miniProjects.length > 0 && renderTemplate`<section class="mini-projects stack gap-4" style="margin-top:3rem;"> <h2>Mini-projets HTML/CSS/JS</h2> <p class="description mini-desc">Quelques exercices et expérimentations autour des fondamentaux du web. Ces petits projets mettent en avant des compétences en HTML, CSS et JavaScript vanilla.</p> ${renderComponent($$result2, "Grid", $$Grid, {}, { "default": async ($$result3) => renderTemplate`${miniProjects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </section>`} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/work.astro", void 0);

const $$file = "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
