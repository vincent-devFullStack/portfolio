import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BiGf9yHu.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BSLhms9o.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_Dm58saKz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\xC0 propos | Vincent Silvestri", "description": "\xC0 propos de Vincent Silvestri", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "\xC0 propos", "tagline": "Voici mon histoire et mon parcours.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="800" height="368" src="/assets/parcours.avif" alt="Photo d'un paysage rocheux illustrant mon parcours" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Durant onze années d’expérience dans le secteur ferroviaire, j’ai eu l’opportunité d’évoluer vers un poste de manager, que j’ai occupé pendant plus de 5 ans. Le poste de manager m’a permis de développer une forte capacité à gérer les relations humaines, un aspect que j’ai toujours apprécié dans mon travail. L'accompagnement des personnes dans leur évolution professionnelle a toujours été une source de motivation constante tout au long de mon parcours. </p><br data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Avec le temps, j’ai ressenti le besoin de me réaligner avec mes valeurs et mes aspirations. Cette remise en question m’a conduit à me tourner vers un domaine qui m’a toujours attiré : le développement web et mobile. J’y ai trouvé un équilibre entre logique, créativité et utilité, autant d’éléments qui nourrissent mon envie de concevoir des produits concrets, porteurs de sens. </p><br data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Aujourd’hui, je suis pleinement engagé dans ma reconversion, et je me forme activement aux technologies du développement avec des projets concrets comme Mentor Gym Fitness, une application que je développe avec Lionel Dufour pour améliorer l’expérience des coachs et des élèves dans le domaine du sport. Ce projet me permet de créer des solutions à impact réel, tout en me plongeant dans une logique d’amélioration continue. </p><br data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Je cherche à rejoindre une équipe portée par l’innovation, à laquelle je pourrais apporter non seulement mes compétences techniques en développement, mais aussi mon expérience en gestion de crise, en communication et en collaboration humaine.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Formations</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>RNCP 6 Concepteur Développeur d'applications Web & Mobile Full Stack</strong> – 2025 </p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>Développement Web Frontend (HTML, CSS, JavaScript, React)</li> <li data-astro-cid-kh7btl4r>Développement Backend (Node.js, Express.js, MongoDB)</li> <li data-astro-cid-kh7btl4r>Gestion de bases de données (NoSQL, MongoDB)</li> <li data-astro-cid-kh7btl4r>Création d'APIs RESTful</li> <li data-astro-cid-kh7btl4r>Utilisation de frameworks (React, Next.js, etc.)</li> <li data-astro-cid-kh7btl4r>Gestion de projet Agile</li> <li data-astro-cid-kh7btl4r>Versionnage avec Git et GitHub</li> <li data-astro-cid-kh7btl4r>Connaissance des principes du responsive design</li> <li data-astro-cid-kh7btl4r>Tests et débogage d'applications web</li> <li data-astro-cid-kh7btl4r>Connaissances en UX/UI Design</li> </ul> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/about.astro", void 0);

const $$file = "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
