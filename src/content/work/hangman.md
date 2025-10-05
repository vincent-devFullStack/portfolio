---
title: "Hangman 🎮"
publishDate: 2025-01-10
img: /assets/hangman.avif
imgMobile: "/assets/hangman-mobile.avif"
img_alt: Capture d'écran du jeu Hangman développé en Python avec Pygame
isMini: true
description: |
  Jeu du pendu développé en Python avec Pygame, puis exporté en WebAssembly grâce à Pygbag pour être jouable directement dans le navigateur.
tags:
  - Python
  - Pygame
  - Pygbag
---

## Aperçu du projet

> Un mini-jeu "pendu" jouable directement dans le navigateur, sans installation locale.

- **Migration Pygame → Web** avec **Pygbag** (WASM/Pyodide) et boucle **asyncio** compatible navigateur.
- **Intégration Astro** avec chemins publics cohérents et **en-têtes CORS** appropriés.
- **Interface améliorée** : taille de police ajustée, éléments réorganisés pour une lecture immédiate.
- **Pendu progressif centré** : 12 étapes de dessin claires et nettes.
- **Responsive** : conteneur dimensionné en **vw**, ratio 1:1, rendu propre sur toutes largeurs d'écran.

---

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

<style>
  /* Annuler les paddings parents sur mobile */
  @media (max-width: 767px) {
    :global(body),
    :global(main),
    :global(.content),
    :global(.stack),
    :global(article) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    
    /* Remettre du padding uniquement pour le texte */
    :global(h2),
    :global(blockquote),
    :global(ul),
    :global(p) {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }

  .game-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding: 1rem 0;
  }

  .game-frame {
    position: relative;
    width: 95vw;
    max-width: 500px;
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

  /* Petits mobiles */
  @media (max-width: 400px) {
    .game-frame {
      width: 92vw;
      max-width: 350px;
    }
  }

  /* Tablettes */
  @media (min-width: 768px) {
    .game-container {
      width: 100%;
      margin-left: 0;
    }
    
    .game-frame {
      width: 80vw;
      max-width: 600px;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .game-frame {
      width: 70vw;
      max-width: 800px;
    }
  }

  /* Masquer l'image de couverture */
  :global(.stack.gap-10.content > img),
  :global(.stack.gap-10.content > a.demo-image) {
    display: none !important;
  }
</style>
