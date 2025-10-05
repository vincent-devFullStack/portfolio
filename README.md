# 🌐 Portfolio – Vincent Silvestri

Mon portfolio personnel, développé avec [Astro](https://astro.build/) et déployé sur [Vercel](https://vercel.com/).  
Il présente mon parcours, mes projets (Flexstream, Mentor Gym Fitness, L’Iconodule, etc.) et permet de télécharger mon CV.

🔗 **En ligne :** [https://www.vince-dev.fr](https://www.vince-dev.fr)

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
