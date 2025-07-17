import { c as createComponent, m as maybeRenderHead, e as renderComponent, d as renderTemplate, a as createAstro, b as addAttribute } from '../chunks/astro/server_BiGf9yHu.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CeAgdsJu.mjs';
import { b as $$Icon, $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BSLhms9o.mjs';
import { a as $$CallToAction, $ as $$ContactCTA } from '../chunks/ContactCTA_Dm58saKz.mjs';
import { $ as $$Grid } from '../chunks/Grid_Bai5Kw9W.mjs';
import { $ as $$Pill } from '../chunks/Pill_D2srq2Vz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="intro stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Full Stack</h2> <p data-astro-cid-ab4ihpzs>
Développement complet d’applications web et mobiles avec une approche front-end et back-end. J’utilise des technologies modernes telles que React, Node.js, MongoDB et Express dans mes projets.
</p> </div> <div class="projects" data-astro-cid-ab4ihpzs> <div class="project-block stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "brain", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Projets en cours</h2> <h3 data-astro-cid-ab4ihpzs>3</h3> </div> <div class="project-block stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Projets terminés</h2> <h3 data-astro-cid-ab4ihpzs>2</h3> </div> </div> </section> `;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Salut, moi c'est Vincent !", "tagline": "D\xE9veloppeur junior, passionn\xE9 et d\xE9termin\xE9 \xE0 progresser.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.03em", "data-astro-cid-j7pv25f6": true })} Developer Junior` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "trophy", "size": "1.03em", "data-astro-cid-j7pv25f6": true })} Objectif Alternance` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "suitcase", "size": "1.03em", "data-astro-cid-j7pv25f6": true })} Prêt pour un stage` })} </div> ` })} <img alt="Portrait de Vincent Silvestri, Développeur Web et Mobile basé à Nice" width="1200" height="630" src="/assets/portrait-min.png" style="mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);" data-astro-cid-j7pv25f6> </header> <section class="section with-background" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4 text-left items-start" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>En recherche d'alternance</h3> <p data-astro-cid-j7pv25f6>
Je recherche une <strong data-astro-cid-j7pv25f6>alternance à partir de janvier 2026</strong> pour poursuivre ma formation en développement web & mobile à <strong data-astro-cid-j7pv25f6>Epitech Nice</strong>.
</p> <p data-astro-cid-j7pv25f6>
📍 Basé à Nice, ouvert au télétravail ou format hybride.
</p> </header> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/CV-Vincent-Silvestri.pdf", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
📄 Voir mon CV
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div></section> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Travaux sélectionnés</h3> <p data-astro-cid-j7pv25f6>Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> <a class="demo-image"${addAttribute(`/work/${project.id}`, "href")} data-astro-cid-j7pv25f6> <img${addAttribute(project.data.img, "src")}${addAttribute(project.data.img_alt || "", "alt")} loading="lazy" data-astro-cid-j7pv25f6> ${project.data.title.includes("\u2705") && renderTemplate`<span class="badgeTermine" data-astro-cid-j7pv25f6>Terminé</span>`} </a> </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Voir tout
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Stack à venir (Epitech pré-MSc)</h3> <p data-astro-cid-j7pv25f6>
Voici les technologies que je vais étudier à Epitech à partir de septembre 2025.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${[
    "PHP / MySQL",
    "Java / Spring Boot",
    "Vue.js / Angular",
    "Ansible / Admin Syst\xE8me"
  ].map((brand) => renderTemplate`<li class="mention-card future-stack" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${brand}</p> </li>`)}` })} </div> </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Stack actuelle</h3> <p data-astro-cid-j7pv25f6>
Voici les technologies que j’utilise au quotidien, ou que j’ai eu l’occasion d’explorer.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${["React/React Native", "Node.js", "MongoDB", "Astro", "TailwindCSS", "GitHub", "Vercel", "Figma"].map((brand) => renderTemplate`<li class="mention-card" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${brand}</p> </li>`)}` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/index.astro", void 0);

const $$file = "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
