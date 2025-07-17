---
title: "Flexstream ✅"
publishDate: 2025-04-13
img: /assets/flexstream.avif
img_alt: Capture de la page d'accueil de l'application Flexstream, avec navbar dégradée et menu responsive.
demo: https://flexstream.vercel.app
description: |
  Flexstream est une application web inspirée des grandes plateformes de streaming, développée avec Next.js 14.
  Elle propose une recherche dynamique, des fiches médias détaillées, une authentification sécurisée et une interface responsive soignée.
  Ce projet met en avant ma capacité à construire une application complète, connectée à une API externe, avec une gestion utilisateur personnalisée.

tags:
  - Next.js
  - MongoDB
  - TMDb API
---

Flexstream est une application vitrine inspirée des plateformes de streaming vidéo.  
Elle démontre mes compétences en **développement full stack**, de l’intégration d’API à la gestion utilisateur, avec une interface fluide et responsive.

Le site est composé d’une **navbar fixe dégradée**, d’un **menu burger animé**, d’un champ de **recherche stylisé**, et d’un layout clair.  
Le tout est construit avec **Next.js 14**, **React**, et stylisé via **CSS Modules**.

L’interface s’inspire de l’UX des grandes plateformes (Netflix, Plex…), et fonctionne aussi bien sur desktop que mobile.

---

## 🔧 Fonctionnalités techniques

- Appels dynamiques à l’API [TMDb](https://www.themoviedb.org/)
- Routing dynamique (`/film/[id]` et `/serie/[id]`) avec pré-rendu statique
- Ajout et suppression de favoris (MongoDB)
- Attribution de notes personnelles
- Espace utilisateur : avatar, email, mot de passe, suppression
- Authentification custom (JWT, bcrypt)
- Barre de recherche reliée à une route `/recherche` avec `useSearchParams`
- Décodage du token pour affichage conditionnel

---

## 📦 Stack technique

- Next.js 14 (App Router + ISR)
- MongoDB avec Mongoose
- TMDb API pour les données médias
- Authentification personnalisée (sans NextAuth)
- CSS Modules + animations légères
- Déploiement sur Vercel

---

## 🤖 Ce que j’ai appris

- Structurer une application complète avec frontend et backend dans Next.js
- Sécuriser les échanges avec un système JWT
- Gérer un profil utilisateur complet : avatar, favoris, mot de passe
- Manipuler et stocker des données issues d’une API externe
- Créer une interface utilisateur responsive sans framework CSS externe

---

## ✅ Statut du projet

Flexstream est **terminé dans sa version 1.0**.  
Il couvre l’ensemble du cycle utilisateur : navigation, recherche, authentification, personnalisation et favoris.

🛠️ De futures évolutions sont prévues : ajout de commentaires, recommandations, filtres avancés...

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/flexstream.git)
- 🚀 Démo en ligne : [Voir Flexstream](https://flexstream.vercel.app)
