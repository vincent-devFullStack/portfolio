---
title: Flexstream
publishDate: 2025-04-13
img: /assets/flexstream.jpg
img_alt: Capture de la page d'accueil de l'application Flexstream, avec navbar dégradée et menu responsive.
demo: https://flexstream.vercel.app
description: |
  Flexstream est une plateforme de film fictive développée avec Next.js.
  Elle propose une barre de recherche animée, une navigation responsive et un menu burger mobile.
  Ce projet est **en cours de développement** et s'inspire des interfaces de plateformes de streaming.

tags:
  - Next.js
  - CSS Modules
  - En cours
---

Flexstream est une application vitrine inspirée des plateformes de streaming vidéo.  
Elle est **actuellement en cours de développement**, et a pour but de démontrer mes compétences en :

- Responsive design
- Intégration de composants réutilisables
- Systèmes de navigation adaptative (desktop/mobile)

Le site est composé d’une **navbar fixe dégradée**, d’un **menu burger animé**, d’un champ de **recherche stylisé**, et d’un layout clair.  
Le tout est construit avec **Next.js 15**, **React**, et stylisé via **CSS Modules**.

---

## 🔧 Fonctionnalités techniques

- Appels dynamiques à l’API [TMDb](https://www.themoviedb.org/)
- Routing dynamique (`/film/[id]`) avec pré-rendu statique
- Affichage conditionnel avec `IntersectionObserver`
- Animation d’apparition des cartes films
- Barre de recherche reliée à une route `/recherche` avec `useSearchParams`
- Fiches détaillées pour chaque film (poster, synopsis, genres, date, note)
- Utilisation des options `{ next: { revalidate: 3600 } }` pour l’ISR

---

## 🤖 Ce que j’ai appris

Développer **Flexstream** m’a permis de renforcer mes compétences sur :

- L’organisation modulaire d’un projet React avec Next.js App Router
- La gestion d’état et du cycle de vie (`useState`, `useEffect`, `useRef`)
- Le système de routing dynamique et de paramètres d’URL
- L'intégration d'une API REST externe (TMDb)
- Le responsive design propre, sans framework CSS externe

---

## 🚀 Prochaines évolutions

- 🎞️ Intégration des bandes-annonces via l'API de TMDb
- 💾 Ajout d’un système de favoris local avec `localStorage`
- 🪪 Système d’authentification avec NextAuth
- 📱 Amélioration de l’UX mobile (animations, transitions)

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/flexstream.git)
- 🚀 Démo en ligne : [Voir Flexstream](https://flexstream.vercel.app)
