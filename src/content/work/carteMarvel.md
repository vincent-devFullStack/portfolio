---
title: "Carte de jeu ✅"
publishDate: 2024-12-02 00:00:00
img: /assets/carteMarvel.jpg
img_alt: Carte de jeu Marvel représentant Hulk, design inspiré des jeux de cartes à collectionner.
isMini: true
demo: https://carte-marvel.vercel.app/
description: |
  Mini-projet d’intégration HTML/CSS : création d’une carte Marvel inspirée des jeux à collectionner. Cet exercice m’a permis de travailler la structure, les styles avancés (bordures, ombres, positionnement) et la reproduction graphique d’une fiche de personnage, avec navigation et design personnalisé.
tags:
  - HTML
  - CSS
---

**Note :** Ce mini-projet m’a permis de m’exercer à l’intégration HTML/CSS en essayant de reproduire une carte Marvel façon jeu à collectionner. Ce n’est pas parfait, mais ça m’a aidé à progresser sur le positionnement, la mise en page et les détails graphiques. Un bon exercice pour consolider les bases du front-end.

---

## 🔗 Liens utiles

- 💻 Code source : [Voir sur GitHub](https://github.com/vincent-devFullStack/carte-marvel.git)
- 🚀 Démo en ligne : [Voir la démo](https://carte-marvel.vercel.app/)

---

<details>
  <summary><b>Afficher le code HTML</b></summary>

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coding Challenge</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <nav>
        <ul class="nav-list">
          <li><img class="logo" src="images/logo_marvel-min.PNG" alt="" /></li>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Description</a></li>
          <li><a href="#">Capacités</a></li>
          <li><a href="#">Source</a></li>
        </ul>
      </nav>
      <br />
    </header>
    <main>
      <div class="carte">
        <div class="haut">
          <h3>HULK</h3>
          <p>
            <b>150 PV </b><img class="energie" src="pngegg.png" alt="ernegie" />
          </p>
        </div>
        <div>
          <img
            class="hulk"
            src="images/hulk-marvel.jpg"
            alt="image de hulk-marvel"
          />
        </div>
        <br />
        <div class="capacités">
          <ul>
            <li>
              <b>Rage <img class="poing" src="pngegg.png" alt="poing" /></b>
            </li>
            <p>Rend insensible Hulk à tout changement d'état.</p>
            <br />
            <li>
              <b
                >Uppercut
                <img class="poing" src="pngegg.png" alt="poing" />
                <img class="poing" src="pngegg.png" alt="poing" />
                <img class="poing" src="pngegg.png" alt="poing"
              /></b>
            </li>
            <p>Lance 3 pièces et inflige 50 dégâts par côté face.</p>
          </ul>
        </div>
      </div>
    </main>
    <footer class="card-footer">
      <ul class="footer-list">
        <li><a href="#" class="footer-link">Contact</a></li>
        <li><a href="#" class="footer-link"> Mentions légales</a></li>
      </ul>
    </footer>
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
}

html,
body {
  background-color: rgb(184, 182, 160);
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.nav-list {
  color: white;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}

a {
  text-decoration: none;
  color: greenyellow;
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 0;
  height: 0.2px;
  background-color: rgb(255, 255, 255);
  transition: 0.2s width;
}

a:hover:after {
  width: 100%;
  left: 0;
}

a:hover {
  color: rgb(195, 245, 121);
  transition: 0.2s color ease-in-out;
  cursor: pointer;
}

div {
  display: flex;
  justify-content: center;
}

.carte {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 10px solid rgba(2, 8, 0, 0.897);
  height: 400px;
  width: 290px;
  margin-top: 5%;
  border-radius: 5px;
  display: block;
  justify-content: center;
  background-color: rgb(104, 194, 109);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}

.hulk {
  border: 8px solid rgba(44, 107, 44, 0.692);
  border-radius: 3%;
  height: 150px;
  width: 240px;
  margin-top: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.199);
}

main {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}

.energie {
  height: 15px;
}

.haut {
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(15, 83, 15);
}

.capacités {
  border: 1.5px solid rgba(0, 0, 0, 0.247);
  height: 140px;
  border-radius: 3px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 30px;
  padding-right: 10px;
  align-items: center;
}

.capacités p {
  font-size: 12px;
}

.poing {
  height: 10px;
}

footer {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 0;
  width: 100vw;
  box-sizing: border-box;
}

.footer-list {
  flex-direction: row;
  align-items: center;
  gap: 10px;
  list-style-type: none;
}

h3:hover {
  color: rgb(3, 82, 3);
}

.card-footer {
  background-color: #333;
  padding: 10px 0;
  text-align: center;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.capacités li {
  margin-left: -2.5px;
}

.haut h3::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

.logo {
  height: 60px;
}
```

</details>
