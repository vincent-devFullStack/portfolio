---
title: "Formulaire ✅"
publishDate: 2024-12-02 00:00:00
img: /assets/formulaire.avif
imgMobile: "/assets/formulaire-mobile.avif"
img_alt: Capture d’écran d’un formulaire HTML simple avec champs de texte, bouton radio, case à cocher et menu déroulant, sur fond blanc.
isMini: true
demo: https://formulaire-demo.vercel.app/
description: |
  Formulaire HTML/CSS réalisé avant ma formation, pour découvrir les bases du développement web.
tags:
  - HTML
  - CSS
  - JS
---

Ce projet a été réalisé avant ma formation en développement web.  
J’ai voulu découvrir les bases de l’HTML et du CSS en créant un formulaire complet, avec différents types de champs, un peu de validation native et une toute première interaction en JavaScript vanilla pour l’envoi du formulaire.  
Aujourd’hui, je referais ce formulaire de façon plus moderne (responsive, accessibilité…), mais il garde une vraie valeur pour mesurer ma progression.

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/formulaire-demo.git)
- 🚀 Démo en ligne : [Voir le formulaire](https://formulaire-demo.vercel.app/)

---

<details>
  <summary><b>Afficher le code HTML + JS</b></summary>

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulaire de démonstration</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Formulaire de démonstration</h1>
    <form
      action="traitement.php"
      method="post"
      onsubmit="return showConfirmation()"
    >
      <!-- Champ de texte -->
      <label for="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        name="nom"
        required
        pattern="[A-Za-zÀ-ÿ ]+"
        title="Veuillez entrer uniquement des lettres."
      /><br /><br />

      <!-- Champ de texte -->
      <label for="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        name="prenom"
        required
        pattern="[A-Za-zÀ-ÿ ]+"
        title="Veuillez entrer uniquement des lettres."
      />
      <br /><br />

      <!-- Champ de courriel -->
      <label for="email">E-mail :</label>
      <input type="email" id="email" name="email" required /><br /><br />

      <!-- Case à cocher -->
      <label for="newsletter">
        Inscription à la newsletter :
        <input type="checkbox" name="newsletter" id="newsletter" /> </label
      ><br /><br />

      <!-- Boutons radio -->
      <label>Sélectionnez votre sexe :</label><br />
      <input type="radio" id="homme" name="sexe" value="homme" />
      <label for="homme">Homme</label><br />
      <input type="radio" id="femme" name="sexe" value="femme" />
      <label for="femme">Femme</label><br />
      <input type="radio" id="autre" name="sexe" value="autre" checked />
      <label for="autre">Autre</label><br /><br />

      <!-- Menu déroulant -->
      <label for="pays">Pays :</label>
      <select name="pays" id="pays" required>
        <option value="" disabled selected>Selectionnez un pays</option>
        <option value="france">France</option>
        <option value="belgique">Belgique</option>
        <option value="canada">Canada</option>
        <option value="suisse">Suisse</option></select
      ><br /><br />

      <!-- Champ de texte multiligne -->
      <label for="commentaires">Commentaires :</label><br />
      <textarea
        name="commentaires"
        id="commentaires"
        rows="3"
        cols="40"
      ></textarea
      ><br /><br />

      <!-- Bouton de soumission -->
      <input type="submit" value="Soumettre" />
    </form>
    <script>
      function showConfirmation() {
        alert("Votre formulaire a bien été soumis !");
      }
    </script>
  </body>
</html>
```

</details>

<details>
  <summary><b>Afficher le code CSS</b></summary>

```css
h1 {
  text-align: center;
}

textarea {
  resize: none;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```
