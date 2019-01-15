# Test dev front

## Consigne
Avec les sources reçues par mail, faites l'intégration de la page d'accueil, avec les jpg disponibles dans le dossier "modeles". Dans un premier temps, concentrez vous sur l'intégration de la navigation, de la première strate et de la strate "Bon plans".

## Précisions :
- Pour la premiere strate un concept interactif à était envisagé. Au clique sur les marqueurs, une bulle informative s'affiche qui permet à l'utilisateur d'accéder à une carte intéractive, à vous d'imaginer les animations.
- La première strate devra prendre 100% de la hauteur de la fenêtre de l'utilisateur.
- Menu fixe au scroll de l'utilisateur
- Intégration responsive.
- Animations sur les éléments graphiques, blocs, ... **Bonus**
- Modal de recherche. **Bonus**
- Toutes les autres strates. **Bonus**
- Slider sur la première strate. **Bonus**

## Contraintes :
- Faites un Fork du dépot Git pour utiliser l'environement de dev proposé.
- Utilisez Git pour versionner vos développements.
- Pensez à joindre dans votre mail l'url de votre dépot, avec une petite note sur votre travail.


## Brunch.io

This is a HTML5 application, built with [Brunch](http://brunch.io).

### Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

Merci et bon travail ! :D

###Mon travail
J'ai choisi d'utiliser un template bootstrap qui avait environ la même disposition des blocs ainsi qu'un carousel. Ce qui m'a permis d'avoir une partie de la gestion du responsive.

J'ai ajouté des plugins à brunch afin d'avoir les fichiers js de bootstrap aux bons endroits avec les polices.

Dans le menu, le picto du panier n'apparaît pas, pourtant il y est dans le code, surement un problème avec le fichier .svg

Pour le blocs "Bon plans", j'ai profité du thème bootstrap pour la disposition des blocs div, puis j'ai rajouté du css sur ces blocs pour coller au mieux à la maquette.

Je n'ai pas eu le temps d'intégrer la carte interactive.

