---
title: "Mini-Jeu ✅"
slug: "mini-jeu"
publishDate: "2024-12-02"
img: "/assets/miniJeu.avif"
imgMobile: "/assets/miniJeu-mobile.avif"
img_alt: "Jeu d'entraînement simple avec deux cercles animés à cliquer, sur fond sombre."
isMini: true
demo: "https://mini-jeu-phi.vercel.app/"
description: |
  Petit jeu interactif développé en HTML, CSS et JavaScript, dans le cadre de mon autoformation. L’objectif : cliquer sur deux cercles animés le plus de fois possible avant la fin du temps imparti. Ce projet m’a permis de pratiquer les bases du DOM, des événements et des animations CSS, tout en rendant l’apprentissage plus ludique.
tags:
  - "HTML"
  - "CSS"
  - "JavaScript"
---

**Note :** Ce mini-projet met en avant ma capacité à mettre en pratique les bases du front-end : gestion des événements, manipulations DOM et animations simples. Ce projet m’a permis de progresser en JavaScript vanilla, sans chercher la complexité, mais en m’exerçant de façon concrète.

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/mini-jeu.git)
- 🚀 Démo en ligne : [Voir le formulaire](https://mini-jeu-phi.vercel.app/)

---

<details>
  <summary><b>Afficher le code HTML</b></summary>

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Initiation</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <h1 id="titre">Titre</h1>
      <div id="btn-red"></div>
      <div id="btn-white"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

</details>

<details>
  <summary><b>Afficher le code CSS</b></summary>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: arial;
  font-size: 1.4rem;
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #1e2337;
}

#btn-red {
  background-color: #ff0000;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
  animation-name: rouge;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes rouge {
  0% {
    left: 0;
    top: 0;
  }
  25% {
    left: 200px;
    top: 0;
  }
  50% {
    left: 200px;
    top: 200px;
  }
  75% {
    left: 0;
    top: 200px;
  }
  100% {
    left: 0;
    top: 0;
  }
}

#btn-white {
  background-color: #ffffff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
  animation-name: blanc;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes blanc {
  0% {
    left: 0;
    top: 0;
  }
  25% {
    left: 0;
    top: 200px;
  }
  50% {
    left: 200px;
    top: 200px;
  }
  75% {
    left: 200px;
    top: 0;
  }
  100% {
    left: 0;
    top: 0;
  }
}
```

</details>
<details>
  <summary><b>Afficher le code JS</b></summary>

```js
console.log("Connecté !");
let titre = document.getElementById("titre");
console.log(titre);
titre.style.color = "green";

let score = 0;
console.log(score, "Initialisation");

score = score + 1;
console.log(score, "après addition");

const cours = "Javascript";
console.log(cours, "cours");

const mot1 = "Hello";
const mot2 = "World!";
console.log(mot1 + " " + mot2);

const btnRed = document.getElementById("btn-red");
const btnWhite = document.getElementById("btn-white");
console.log(btnRed, "bouton rouge");
console.log(btnWhite, "bouton blanc");
let compteur = 0;
console.log(compteur, "compteur  au demarrage");

function add() {
  compteur = compteur + 1;
  console.log(compteur, "compteur après incrémentation");
  titre.innerText = `Nombre de coups: ${compteur}`;
}

btnRed.addEventListener("click", function () {
  console.log("cercle rouge cliqué");
  add();
});

btnWhite.addEventListener("click", function () {
  console.log("cercle blanc cliqué");
  add();
});

setTimeout(function () {
  btnRed.remove();
  btnWhite.remove();
  titre.innerText = "Fin de la partie";
}, 10000);
```

</details>
