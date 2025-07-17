import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DoZvGP2v.mjs';
import { manifest } from './manifest_DZ9uSi_-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/sitemap.xml.astro.mjs');
const _page4 = () => import('./pages/work.astro.mjs');
const _page5 = () => import('./pages/work/_---slug_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/sitemap.xml.ts", _page3],
    ["src/pages/work.astro", _page4],
    ["src/pages/work/[...slug].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8f8a4250-0b1a-4f8d-a119-1cc0a035b6c9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
