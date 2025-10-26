# 🌐 Portfolio – Vincent Silvestri

Mon portfolio personnel, développé avec [Astro](https://astro.build/) et déployé sur [Vercel](https://vercel.com/).  
Il présente mon parcours, mes projets (Flexstream, Mentor Gym Fitness, L’Iconodule, etc.) et permet de télécharger mon CV.

🔗 **En ligne :** ![Deploy](https://img.shields.io/badge/deployed%20on-vercel-black?logo=vercel)[https://www.vince-dev.fr](https://www.vince-dev.fr)

---

## 🚀 Stack technique

- **Astro** 5.x
- **TypeScript**
- **Markdown** (contenu des projets)
- **Vercel** (hébergement / CI-CD)
- **pnpm** (gestion des dépendances)

---

## 📂 Structure du projet

```text
├── public/ # Assets publics (favicon, PDF, images...)
├── src/
│ ├── components/ # Composants Astro/TS réutilisables
│ ├── content/ # Contenus Markdown (projets)
│ ├── layouts/ # Layouts globaux
│ ├── pages/ # Pages principales du site
│ └── styles/ # Styles globaux
├── astro.config.mjs # Config Astro
├── package.json # Dépendances + scripts
├── pnpm-lock.yaml # Lockfile pnpm (reproductibilité)
└── tsconfig.json # Config TypeScript
```

---

## 🛠️ Installation & commandes

Toutes les commandes se lancent depuis la racine du projet.

| Commande           | Action                                                                         |
| ------------------ | ------------------------------------------------------------------------------ |
| `pnpm install`     | Installe les dépendances                                                       |
| `pnpm run dev`     | Lance le serveur local de dev → [http://localhost:4321](http://localhost:4321) |
| `pnpm run build`   | Génère la version de production dans le dossier `dist/`                        |
| `pnpm run preview` | Lance un serveur local pour prévisualiser la prod                              |
| `pnpm astro ...`   | Exécute des commandes Astro (ex: `pnpm astro check`)                           |

---

## 📄 Licence

Projet personnel – usage libre pour consultation.  
© 2025 [Vincent Silvestri](https://www.linkedin.com/in/vincent-silvestri-0b826a249/).

---

## 🎯 Critères d'évaluation

| Critère                                 | Statut | Preuve / Commentaire                                                                                                        |
| :-------------------------------------- | :----: | :-------------------------------------------------------------------------------------------------------------------------- |
| Expression                              |   ✅   | Texte d’accueil clair et professionnel (`src/pages/index.astro:79`).                                                        |
| Concision                               |   ✅   | Sections courtes, sans redondance, sur chaque page (`src/pages/index.astro:100`).                                           |
| Flawless (sans erreurs)                 |   ✅   | Relectures orthographe/grammaire, contenus en français standard (`src/pages/about.astro:32`).                               |
| Hook (accroche)                         |   ✅   | Hero avec nom, tagline, photo et CTA contact (`src/pages/index.astro:48`).                                                  |
| Consistency (cohérence)                 |   ✅   | Projets et objectifs alignés sur la cible alternance dev/architecte SI (`src/pages/work.astro:53`).                         |
| Organization (organisation)             |   ✅   | Navigation claire + structure sectionnée par thématiques (`src/components/Nav.astro:6`).                                    |
| Concreteness (concrétisation)           |   ✅   | Chaque projet détaille fonctionnalités, stack et statut (`src/content/work/flexstream.md:32`).                              |
| Argumentation                           |   ✅   | Page À propos argumente la reconversion et les motivations (`src/pages/about.astro:32`).                                    |
| Menu (navigation)                       |   ✅   | Menu accessible avec liens vers les sections clés (`src/components/Nav.astro:6`).                                           |
| UI/UX Choices (choix de design)         |   ✅   | Voir justification ci-dessous.                                                                                              |
| UI/UX Identity (identité visuelle)      |   ✅   | Palette, typos et iconographie déclarées dans `src/styles/global.css:2`.                                                    |
| UI/UX Flat Design                       |   ✅   | Style majoritairement plat avec textures et dégradés légers assumés pour éviter la monotonie (`src/pages/index.astro:288`). |
| Frontend Tool (outil frontend)          |   ✅   | Stack Astro/TypeScript détaillée dans le README et les pages projets (`src/content/work/flexstream.md:45`).                 |
| Responsiveness (adaptabilité)           |   ✅   | Media queries sur Hero, CTA et composants (`src/pages/index.astro:244`).                                                    |
| Online (mise en ligne)                  |   ✅   | Déploiement public Vercel (`astro.config.mjs:4`).                                                                           |
| Versioning Basics (gestion de versions) |   ✅   | Historique de commits courts et explicites (`git log -5 --oneline`).                                                        |

### Justification des choix UI/UX

- **Palette** : dominante violet/rose (`--accent-*`) pour refléter une image technologique chaleureuse ; gris neutres assurent lisibilité dark/light (`src/styles/global.css:2`).
- **Typographies** : `Rubik` pour les titres (ton moderne, arrondi) et `Public Sans` pour le corps de texte, garantissant contraste hiérarchique (`src/styles/global.css:74`).
- **Iconographie** : jeu d’icônes `Icon.astro` basé sur un set cohérent (terminal, brain, suitcase) pour illustrer rapidement compétences et appels à l’action (`src/components/Icon.astro`).
- **Hiérarchie** : composants `Hero`, `Grid`, `PortfolioPreview` structurent l’information avec espacements constants (`gap-*`) pour guider le regard (`src/components/Grid.astro:17`).
- **Interactions** : hover légers (élévation, accentuation de couleur) sur cartes et boutons pour communiquer l’interactivité sans surcharge (`src/components/PortfolioPreview.astro:38`).
- **Textures contrôlées** : bruit léger et dégradés subtils assumés pour apporter de la profondeur tout en respectant une logique flat centrée contenu (`src/pages/index.astro:288`).
