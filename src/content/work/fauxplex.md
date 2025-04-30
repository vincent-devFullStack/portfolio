---
title: Faux Plex
publishDate: 2025-04-13 00:00:00
img: /assets/plex.jpg
img_alt: Capture de la page d'accueil de l'application Faux Plex, avec navbar dégradée et menu responsive.
description: |
  Faux Plex est une plateforme de film fictive développée avec Next.js. 
  Elle propose une barre de recherche animée, une navigation responsive et un burger menu mobile. 
  Ce projet est **en cours de développement** et s'inspire de l'interface Plex.tv.
tags:
  - Next.js
  - CSS Modules
  - En cours
---

Faux Plex est une application vitrine inspirée des plateformes de streaming comme Plex.tv.  
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

Développer **Faux Plex** m’a permis de renforcer mes compétences sur :

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
- 🌐 Déploiement public via **Vercel**

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/faux-plex.git)
<!-- - 🚀 Démo en ligne : [Tester sur Vercel](https://...) -->
