# laruche project

# installation

```bash
npm install
```

# run

```bash
npm run start
```

# Informations sur le projet

Pour reprendre la terminologie Redux:
* Les composants dans components/smarts sont des smarts components
* Les composents dans components/dumbs sont des dumbs components
* les dumbs components ne font que de l'affichage
* les smarts gerent l'acces aux données et la logique applicative

Quelques fonctionnalités UX pour améliorer l'ergonomie:
* infinite scroll pour l'affichage des produits
* header qui s'auto hide quand on scroll

Au niveau des libs utilisé
* pour la gestion des layouts j'ai utilisé tailwindcss
* pour quelques autres composants, antd
* react-query pour lire les données

