import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate, e as renderComponent } from './astro/server_BiGf9yHu.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { b as $$Icon } from './BaseLayout_BSLhms9o.mjs';

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Un projet, une question ?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:contact@vince-dev.fr", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Me contacter
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $, $$CallToAction as a };
