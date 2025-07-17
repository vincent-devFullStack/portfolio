import "kleur/colors";
import { f as decodeKey } from "./chunks/astro/server_BiGf9yHu.mjs";
import "clsx";
import "cookie";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/astro-designed-error-pages_JsLgmg0K.mjs";
import "es-module-lexer";

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [
          key,
          value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F"),
        ];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content
    .normalize()
    .replace(/\?/g, "%3F")
    .replace(/#/g, "%23")
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment
    .map((part) => getParameter(part, params))
    .join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path =
      segments.map((segment) => getSegment(segment, sanitizedParams)).join("") +
      trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key,
  };
}

const manifest = deserializeManifest({
  hrefRoot:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/",
  cacheDir:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/node_modules/.astro/",
  outDir:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/dist/",
  srcDir:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/",
  publicDir:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/public/",
  buildClientDir:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/dist/client/",
  buildServerDir:
    "file:///C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/dist/server/",
  adapterName: "@astrojs/vercel",
  routes: [
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "page",
        component: "_server-islands.astro",
        params: ["name"],
        segments: [
          [{ content: "_server-islands", dynamic: false, spread: false }],
          [{ content: "name", dynamic: true, spread: false }],
        ],
        pattern: "^\\/_server-islands\\/([^/]+?)\\/?$",
        prerender: false,
        isIndex: false,
        fallbackRoutes: [],
        route: "/_server-islands/[name]",
        origin: "internal",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        isIndex: false,
        route: "/_image",
        pattern: "^\\/_image\\/?$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component:
          "node_modules/.pnpm/astro@5.11.1_@types+node@24_491df9008c7ddd3356319b318c366b3f/node_modules/astro/dist/assets/endpoint/generic.js",
        pathname: "/_image",
        prerender: false,
        fallbackRoutes: [],
        origin: "internal",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/about.DKm1Ks-j.css" },
        {
          type: "inline",
          content:
            "svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n",
        },
      ],
      routeData: {
        route: "/404",
        isIndex: false,
        type: "page",
        pattern: "^\\/404\\/?$",
        segments: [[{ content: "404", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/404.astro",
        pathname: "/404",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/about.DKm1Ks-j.css" },
        {
          type: "inline",
          content:
            'a[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:"";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\n.about[data-astro-cid-kh7btl4r]{display:flex;flex-direction:column;gap:3.5rem}img[data-astro-cid-kh7btl4r]{margin-top:1.5rem;border-radius:1.5rem;box-shadow:var(--shadow-md)}section[data-astro-cid-kh7btl4r]{display:flex;flex-direction:column;gap:.5rem;color:var(--gray-200)}.section-title[data-astro-cid-kh7btl4r]{grid-column-start:1;font-size:var(--text-xl);color:var(--gray-0)}.content[data-astro-cid-kh7btl4r]{grid-column:1 / 4}.content[data-astro-cid-kh7btl4r] a{text-decoration:1px solid underline transparent;text-underline-offset:.25em;transition:text-decoration-color var(--theme-transition)}.content[data-astro-cid-kh7btl4r] a:hover,.content[data-astro-cid-kh7btl4r] a:focus{text-decoration-color:currentColor}@media (min-width: 50em){.about[data-astro-cid-kh7btl4r]{display:grid;grid-template-columns:1fr 60% 1fr}.about[data-astro-cid-kh7btl4r]>:first-child{grid-column-start:2}section[data-astro-cid-kh7btl4r]{display:contents;font-size:var(--text-lg)}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n',
        },
      ],
      routeData: {
        route: "/about",
        isIndex: false,
        type: "page",
        pattern: "^\\/about\\/?$",
        segments: [[{ content: "about", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/about.astro",
        pathname: "/about",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/sitemap.xml",
        isIndex: false,
        type: "endpoint",
        pattern: "^\\/sitemap\\.xml\\/?$",
        segments: [[{ content: "sitemap.xml", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/sitemap.xml.ts",
        pathname: "/sitemap.xml",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/about.DKm1Ks-j.css" },
        {
          type: "inline",
          content:
            'a[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:"";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\n.card[data-astro-cid-lgkm4u2a]{display:grid;grid-template:auto 1fr / auto 1fr;height:11rem;background:#ffffff0d;border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:.75rem;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none;font-family:var(--font-brand);font-size:var(--text-lg);font-weight:500;position:relative;transition:box-shadow var(--theme-transition),transform .3s ease}.card[data-astro-cid-lgkm4u2a]:hover{box-shadow:0 10px 15px #00000040;transform:translateY(-3px)}.card[data-astro-cid-lgkm4u2a]:hover img[data-astro-cid-lgkm4u2a]{transform:scale(1.01);filter:brightness(1.05) saturate(1.1)}img[data-astro-cid-lgkm4u2a]{grid-area:1 / 1 / 3 / 3;width:100%;height:100%;object-fit:cover;transition:transform .3s ease,filter .3s ease}.title[data-astro-cid-lgkm4u2a]{grid-area:1 / 1 / 2 / 2;z-index:1;margin:.5rem;padding:.5rem 1rem;background:var(--gray-999);color:var(--gray-200);border-radius:.375rem;backdrop-filter:blur(4px)}.badge[data-astro-cid-lgkm4u2a]{position:absolute;bottom:10px;right:10px;background-color:#28a745;color:#fff;font-size:.95rem;padding:4px 10px;border-radius:9999px;font-weight:600;box-shadow:0 2px 4px #0003;z-index:2}@media (min-width: 50em){.card[data-astro-cid-lgkm4u2a]{height:18rem;border-radius:1.5rem}.title[data-astro-cid-lgkm4u2a]{border-radius:.9375rem}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n.grid[data-astro-cid-vc5tsdmu]{display:grid;grid-auto-rows:1fr;gap:1rem;list-style:none;padding:0}.grid[data-astro-cid-vc5tsdmu].small{grid-template-columns:1fr 1fr;gap:1.5rem}.grid[data-astro-cid-vc5tsdmu].small>:last-child:nth-child(odd){grid-column:1 / 3}@media (min-width: 50em){.grid[data-astro-cid-vc5tsdmu]{grid-template-columns:1fr 1fr;gap:4rem}.grid[data-astro-cid-vc5tsdmu].offset{--row-offset: 7.5rem;padding-bottom:var(--row-offset)}.grid[data-astro-cid-vc5tsdmu].offset>:nth-child(odd){transform:translateY(var(--row-offset))}.grid[data-astro-cid-vc5tsdmu].offset>:last-child:nth-child(odd){grid-column:2 / 3;transform:none}.grid[data-astro-cid-vc5tsdmu].small{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem}.grid[data-astro-cid-vc5tsdmu].small>*{flex-basis:20rem}}\n',
        },
      ],
      routeData: {
        route: "/work",
        isIndex: false,
        type: "page",
        pattern: "^\\/work\\/?$",
        segments: [[{ content: "work", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/work.astro",
        pathname: "/work",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/about.DKm1Ks-j.css" },
        {
          type: "inline",
          content:
            '.grid[data-astro-cid-vc5tsdmu]{display:grid;grid-auto-rows:1fr;gap:1rem;list-style:none;padding:0}.grid[data-astro-cid-vc5tsdmu].small{grid-template-columns:1fr 1fr;gap:1.5rem}.grid[data-astro-cid-vc5tsdmu].small>:last-child:nth-child(odd){grid-column:1 / 3}@media (min-width: 50em){.grid[data-astro-cid-vc5tsdmu]{grid-template-columns:1fr 1fr;gap:4rem}.grid[data-astro-cid-vc5tsdmu].offset{--row-offset: 7.5rem;padding-bottom:var(--row-offset)}.grid[data-astro-cid-vc5tsdmu].offset>:nth-child(odd){transform:translateY(var(--row-offset))}.grid[data-astro-cid-vc5tsdmu].offset>:last-child:nth-child(odd){grid-column:2 / 3;transform:none}.grid[data-astro-cid-vc5tsdmu].small{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem}.grid[data-astro-cid-vc5tsdmu].small>*{flex-basis:20rem}}\n.pill[data-astro-cid-2qeywk4b]{display:flex;padding:.5rem 1rem;gap:.5rem;color:var(--accent-text-over);border:1px solid var(--accent-regular);background-color:var(--accent-regular);border-radius:999rem;font-size:var(--text-md);line-height:1.35;white-space:nowrap}\na[data-astro-cid-balv45lp]{position:relative;display:flex;place-content:center;text-align:center;padding:.56em 2em;gap:.8em;color:var(--accent-text-over);text-decoration:none;line-height:1.1;border-radius:999rem;overflow:hidden;background:var(--gradient-accent-orange);box-shadow:var(--shadow-md);white-space:nowrap}@media (min-width: 20em){a[data-astro-cid-balv45lp]{font-size:var(--text-lg)}}a[data-astro-cid-balv45lp]:after{content:"";position:absolute;inset:0;pointer-events:none;transition:background-color var(--theme-transition);mix-blend-mode:overlay}a[data-astro-cid-balv45lp]:focus:after,a[data-astro-cid-balv45lp]:hover:after{background-color:hsla(var(--gray-999-basis),.3)}@media (min-width: 50em){a[data-astro-cid-balv45lp]{padding:1.125rem 2.5rem;font-size:var(--text-xl)}}aside[data-astro-cid-rcdzuq3a]{display:flex;flex-direction:column;align-items:center;gap:3rem;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);padding:5rem 1.5rem;background-color:var(--gray-999_40);box-shadow:var(--shadow-sm)}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-xl);text-align:center;max-width:15ch}@media (min-width: 50em){aside[data-astro-cid-rcdzuq3a]{padding:7.5rem;flex-direction:row;flex-wrap:wrap;justify-content:space-between}h2[data-astro-cid-rcdzuq3a]{font-size:var(--text-3xl);text-align:left}}\n',
        },
        { type: "external", src: "/_astro/index.CAqaNex1.css" },
        {
          type: "inline",
          content:
            "svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n",
        },
      ],
      routeData: {
        route: "/",
        isIndex: true,
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  base: "/",
  trailingSlash: "ignore",
  compressHTML: true,
  componentMetadata: [
    ["\u0000astro:content", { propagation: "in-tree", containsHead: false }],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/index.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/index@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astrojs-ssr-virtual-entry",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/sitemap.xml.ts",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/sitemap.xml@_@ts",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/work.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/work@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/work/[...slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/work/[...slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/404.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/pages/about.astro",
      { propagation: "none", containsHead: true },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000@astrojs-ssr-adapter": "_@astrojs-ssr-adapter.mjs",
    "\u0000noop-middleware": "_noop-middleware.mjs",
    "\u0000noop-actions": "_noop-actions.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000@astro-page:src/pages/404@_@astro": "pages/404.astro.mjs",
    "\u0000@astro-page:src/pages/about@_@astro": "pages/about.astro.mjs",
    "\u0000@astro-page:src/pages/sitemap.xml@_@ts":
      "pages/sitemap.xml.astro.mjs",
    "\u0000@astro-page:src/pages/work/[...slug]@_@astro":
      "pages/work/_---slug_.astro.mjs",
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-page:node_modules/.pnpm/astro@5.11.1_@types+node@24_491df9008c7ddd3356319b318c366b3f/node_modules/astro/dist/assets/endpoint/generic@_@js":
      "pages/_image.astro.mjs",
    "\u0000@astro-page:src/pages/work@_@astro": "pages/work.astro.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "pages/index.astro.mjs",
    "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/node_modules/.pnpm/astro@5.11.1_@types+node@24_491df9008c7ddd3356319b318c366b3f/node_modules/astro/dist/assets/services/sharp.js":
      "chunks/sharp_76e06YB0.mjs",
    "C:\\Users\\vince\\Documents\\1-projets_devs\\portfolio_vincent\\.astro\\content-assets.mjs":
      "chunks/content-assets_DleWbedO.mjs",
    "C:\\Users\\vince\\Documents\\1-projets_devs\\portfolio_vincent\\.astro\\content-modules.mjs":
      "chunks/content-modules_Dz-S_Wwv.mjs",
    "\u0000astro:data-layer-content":
      "chunks/_astro_data-layer-content_CqQ5n73W.mjs",
    "\u0000@astrojs-manifest": "manifest_Df7SZ_oM.mjs",
    "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":
      "_astro/BaseLayout.astro_astro_type_script_index_0_lang.Cf-elt_A.js",
    "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/Nav.astro?astro&type=script&index=0&lang.ts":
      "_astro/Nav.astro_astro_type_script_index_0_lang.iAA4Z6Qc.js",
    "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":
      "_astro/ThemeToggle.astro_astro_type_script_index_0_lang.uzd8m1xC.js",
    "astro:scripts/before-hydration.js": "",
  },
  inlinedScripts: [
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts",
      'addEventListener("load",()=>document.documentElement.classList.add("loaded"));',
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/Nav.astro?astro&type=script&index=0&lang.ts",
      'class i extends HTMLElement{constructor(){super(),this.appendChild(this.querySelector("template").content.cloneNode(!0));const n=this.querySelector("button"),t=document.getElementById("menu-content");t.hidden=!0,t.classList.add("menu-content");const d=e=>{n.setAttribute("aria-expanded",e?"true":"false"),t.hidden=!e};n.addEventListener("click",()=>d(t.hidden));const s=e=>{d(e.matches),n.hidden=e.matches},c=window.matchMedia("(min-width: 50em)");s(c),c.addEventListener("change",s)}}customElements.define("menu-button",i);',
    ],
    [
      "C:/Users/vince/Documents/1-projets_devs/portfolio_vincent/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts",
      'class n extends HTMLElement{constructor(){super();const e=this.querySelector("button"),t=s=>{document.documentElement.classList[s?"add":"remove"]("theme-dark"),e.setAttribute("aria-pressed",String(s))};e.addEventListener("click",()=>t(!this.isDark())),t(this.isDark())}isDark(){return document.documentElement.classList.contains("theme-dark")}}customElements.define("theme-toggle",n);',
    ],
  ],
  assets: [
    "/_astro/about.DKm1Ks-j.css",
    "/_astro/index.CAqaNex1.css",
    "/CV-Vincent-Silvestri.pdf",
    "/favicon.ico",
    "/favicon.svg",
    "/robots.txt",
    "/_redirects",
    "/assets/carteMarvel.jpg",
    "/assets/flexstream.jpg",
    "/assets/formulaire.jpg",
    "/assets/formulaire2.jpg",
    "/assets/mgf-project.jpg",
    "/assets/mgf-qrcode.png",
    "/assets/miniJeu.jpg",
    "/assets/parcours.avif",
    "/assets/portrait-min.png",
    "/assets/stock-2.jpg",
    "/assets/stock-3.jpg",
    "/assets/stock-4.jpg",
    "/assets/backgrounds/bg-footer-dark-1440w.jpg",
    "/assets/backgrounds/bg-footer-dark-800w.jpg",
    "/assets/backgrounds/bg-footer-light-1440w.jpg",
    "/assets/backgrounds/bg-footer-light-800w.jpg",
    "/assets/backgrounds/bg-main-dark-1440w.jpg",
    "/assets/backgrounds/bg-main-dark-800w.jpg",
    "/assets/backgrounds/bg-main-dark.svg",
    "/assets/backgrounds/bg-main-light-1440w.jpg",
    "/assets/backgrounds/bg-main-light-800w.jpg",
    "/assets/backgrounds/bg-main-light.svg",
    "/assets/backgrounds/bg-subtle-1-dark-1440w.jpg",
    "/assets/backgrounds/bg-subtle-1-dark-800w.jpg",
    "/assets/backgrounds/bg-subtle-1-light-1440w.jpg",
    "/assets/backgrounds/bg-subtle-1-light-800w.jpg",
    "/assets/backgrounds/bg-subtle-2-dark-1440w.jpg",
    "/assets/backgrounds/bg-subtle-2-dark-800w.jpg",
    "/assets/backgrounds/bg-subtle-2-light-1440w.jpg",
    "/assets/backgrounds/bg-subtle-2-light-800w.jpg",
    "/assets/backgrounds/noise.png",
  ],
  buildFormat: "directory",
  checkOrigin: true,
  serverIslandNameMap: [],
  key: "90+FtcqzeSO7+yXarY5E4AIeNUO+Onp4Yjrlpyp8oos=",
});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
