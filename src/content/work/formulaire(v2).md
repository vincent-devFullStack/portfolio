---
title: "Formulaire (v2) ✅"
publishDate: 2024-12-02 00:00:00
img: /assets/formulaire2.avif
imgMobile: "/assets/formulaire2-mobile.avif"
img_alt: Formulaire de contact moderne avec champs alignés et bouton orange.
isMini: true
demo: https://formulaire-v2.vercel.app/
description: |
  Version modernisée de mon tout premier formulaire HTML/CSS. J’ai retravaillé la structure, l’ergonomie, les couleurs et le design pour offrir une expérience utilisateur plus agréable. Ce projet montre l’évolution de mes compétences sur quelques semaines.
tags:
  - HTML
  - CSS
  - JS
---

**Note :** Ce formulaire a été conçu pour aller plus loin que mon premier essai.  
J’ai voulu intégrer une validation JavaScript, des messages d’erreur, et une interface plus soignée : une étape clé avant d’attaquer ma formation.

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/formulaire-v2.git)
- 🚀 Démo en ligne : [Voir le formulaire](https://formulaire-v2.vercel.app/)

---

<details>
  <summary><b>Afficher le code HTML</b></summary>

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulaire</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <div class="banniere-titre">
        <h1 id="titre">Contactez-nous dès maintenant</h1>
      </div>
      <form id="formulaire" action="">
        <div class="form-item">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" placeholder="Votre prénom" />
          <div class="error invisible">
            Ce champ doit contenir entre 2 et 10 caractères
          </div>
        </div>
        <div class="form-item">
          <label for="nom">Nom</label>
          <input type="text" id="nom" placeholder="Votre nom" />
          <div class="error invisible">
            Ce champ doit contenir entre 3 et 15 caractères
          </div>
        </div>
        <div class="form-item">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Votre email" />
        </div>
        <div class="form-item">
          <label for="message">Votre message</label>
          <textarea placeholder="Votre message" id="message"></textarea>
          <div class="error invisible">
            Ce champ doit contenir entre 10 et 100 caractères
          </div>
        </div>
        <button id="btn" type="submit">Envoyer</button>
      </form>
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

h1 {
  margin-bottom: 2rem;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #1e2337;
}

.form-item {
  margin-bottom: 3rem;
}

.form-item label {
  display: block;
  margin-bottom: 10px;
  font-size: 2rem;
}

.form-item input,
textarea {
  padding: 1rem;
  width: 100%;
  color: grey;
  font-size: 2rem;
}

textarea {
  height: 200px;
  font-family: inherit;
  resize: none;
}

#btn {
  background-color: orange;
  color: #1e2337;
  border: none;
  padding: 2rem;
  width: 100%;
  margin-top: 2rem;
  font-weight: 900;
  text-transform: uppercase;
}

.error {
  margin-top: 5px;
  color: red;
}

.invisible {
  display: none;
}
```

</details>
<details>
  <summary><b>Afficher le code JS</b></summary>

```js
console.log("Connecté !");

const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Formulaire envoyé");

  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const msgError = document.querySelectorAll(".error");
  const titre = document.getElementById("titre");

  msgError.forEach((error) => {
    error.classList.add("invisible");
  });

  // Prenom validation
  if (prenomValue.length < 2 || prenomValue.length > 10) {
    console.log("Erreur: prénom doit contenir entre 2 et 10 caractères");
    prenom.nextElementSibling.classList.remove("invisible");
  } else if (nomValue.length < 3 || nomValue.length > 15) {
    console.log("Erreur: nom doit contenir entre 3 et 15 caractères");
    nom.nextElementSibling.classList.remove("invisible");
  } else if (messageValue.length < 10 || messageValue.length > 100) {
    console.log("Erreur: message doit contenir entre 10 et 100 caractères");
    message.nextElementSibling.classList.remove("invisible");
  } else {
    console.log("Succès: toutes les données sont valides");
    titre.innerText = "Votre message à bien été envoyé !";
    form.remove();
  }
});
```

</details>
