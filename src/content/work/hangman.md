---
title: "Hangman ✅🎮"
publishDate: 2025-01-10
img: /assets/hangman.avif
imgMobile: "/assets/hangman-mobile.avif"
img_alt: Capture d'écran du jeu Hangman développé en Python avec Pygame
isMini: false
description: |
  Jeu du pendu développé en Python avec Pygame, puis exporté en WebAssembly grâce à Pygbag pour être jouable directement dans le navigateur.
tags:
  - Python
  - Pygame
  - Pygbag
---

<div class="content-wrapper">

## Aperçu du projet

> Un mini-jeu "pendu" jouable directement dans le navigateur, sans installation locale.

- **Migration Pygame → Web** avec **Pygbag** (WASM/Pyodide) et boucle **asyncio** compatible navigateur.
- **Intégration Astro** avec chemins publics cohérents et **en-têtes CORS** appropriés.
- **Interface améliorée** : taille de police ajustée, éléments réorganisés pour une lecture immédiate.
- **Pendu progressif centré** : 12 étapes de dessin claires et nettes.

---

<!-- Message pour mobile/tablette -->
<div class="mobile-message">
  <div class="message-content">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
    <h3>Jeu disponible sur PC uniquement</h3>
    <p>Ce jeu nécessite un écran plus grand et un clavier pour une expérience optimale. Veuillez utiliser un ordinateur pour y jouer.</p>
  </div>
</div>

<!-- Jeu (visible sur desktop uniquement) -->
<div class="game-container">
  <div class="game-frame">
    <iframe
      src="/games/hangman/index.html"
      title="Hangman"
      allow="cross-origin-isolated"
      scrolling="no"
    ></iframe>
  </div>
</div>

</div>

<style>
  .content-wrapper {
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  /* Message mobile/tablette */
  .mobile-message {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem;
    margin: 2rem 0;
  }

  .message-content {
    max-width: 500px;
    text-align: center;
    padding: 2rem;
    background: var(--gradient-subtle);
    border: 2px solid var(--gray-800);
    border-radius: 1rem;
    box-shadow: var(--shadow-md);
  }

  .message-content svg {
    color: var(--accent-regular);
    margin: 0 auto 1rem;
  }

  .message-content h3 {
    font-size: var(--text-xl);
    color: var(--gray-0);
    margin-bottom: 0.5rem;
  }

  .message-content p {
    font-size: var(--text-md);
    color: var(--gray-300);
    line-height: 1.6;
  }

  /* Conteneur du jeu */
  .game-container {
    display: none; /* Caché par défaut (mobile/tablette) */
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 1rem 0;
  }

  .game-frame {
    position: relative;
    width: 70vw;
    max-width: 800px;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-md, 0 10px 30px rgba(0,0,0,0.2));
    background: #1e1e1e;
  }

  .game-frame > iframe {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
    border: 0;
    touch-action: manipulation;
  }

  /* Desktop uniquement */
  @media (min-width: 1024px) {
    .mobile-message {
      display: none; /* Cache le message sur desktop */
    }

    .game-container {
      display: flex; /* Affiche le jeu sur desktop */
    }
  }

  /* Masquer l'image de couverture */
  :global(.stack.gap-10.content > img),
  :global(.stack.gap-10.content > a.demo-image) {
    display: none !important;
  }
</style>
