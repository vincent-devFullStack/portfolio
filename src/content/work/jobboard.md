---
title: "Job Board ✅"
publishDate: 2025-04-19
img: /assets/JobBoard.avif
imgMobile: "/assets/JobBoard-mobile.avif"
img_alt: Capture du tableau de bord administrateur du Job Board affichant offres, filtres et graphiques de suivi.
rank: 30
pinned: true
demo: https://t-web-501-nce-2.vercel.app/
isMini: false
description: |
  Job Board est un portail de recrutement full stack développé avec Node.js, Express et MySQL.
  Il permet la publication d’offres, la candidature en ligne, le suivi des dossiers et la gestion administrative sécurisée.
  Ce projet met en avant mes compétences en conception d’API REST, intégration front-back et structuration de base de données relationnelle.
tags:
  - Node.js
  - Express
  - MySQL
  - EJS
  - REST API
---

Job Board est une application web complète pensée pour fluidifier la relation entre **candidats** et **recruteurs**.  
Elle illustre ma capacité à concevoir un système d’information complet, depuis la **modélisation SQL** jusqu’à la **gestion sécurisée des accès**, avec une interface claire et responsive.

Le projet respecte l’ensemble du cahier des charges du module **T-ENT-500 - Epitech** : routes REST documentées, workflow de candidature traçable, double interface public / admin et journalisation des actions.  
Il a été **réalisé en équipe avec Emma Fassi et Tanguy Maudrich** sur une durée de **2 semaines**.

---

## 🔧 Fonctionnalités techniques

- Routes REST (`/api/*`) avec verbes HTTP complets (GET, POST, PATCH, DELETE)
- Authentification sécurisée (JWT stocké en cookie HttpOnly)
- Candidature rapide ou complète (upload Cloudinary intégré)
- Dashboard admin CRUD (annonces, candidatures, utilisateurs)
- Journalisation automatique dans la table `application_logs`
- Pagination, filtres et tri dynamique côté recruteur
- Interface responsive servie depuis `src/public`
- Validation côté serveur et protection des routes sensibles

---

## 📦 Stack technique

- Node.js ≥ 18 + Express
- MySQL (pool de connexions, script `schema.sql`)
- EJS côté serveur + modules front en JS vanilla
- Middleware d’authentification custom
- Cloudinary pour la gestion des CV
- Déploiement sur Vercel

---

## 🤖 Ce que j’ai appris

- Structurer un projet Express complet avec séparation claire des couches (routes, middlewares, vues, modèles)
- Concevoir une base relationnelle normalisée et scriptée pour être reproductible
- Sécuriser les échanges avec JWT et cookies HttpOnly
- Gérer un espace admin complet et multi-rôles (candidat, recruteur, admin)
- Intégrer un upload Cloudinary dans un workflow de candidature
- Travailler avec des requêtes AJAX dynamiques et un rendu côté serveur

---

## ✅ Statut du projet

Job Board est **terminé dans sa version 1.0**.  
Il couvre tout le cycle de vie d’une offre : publication, candidature, suivi et administration.

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/T-WEB-501-NCE_2.git)
- 🚀 Démo en ligne : [Voir la démo](https://t-web-501-nce-2.vercel.app/)
