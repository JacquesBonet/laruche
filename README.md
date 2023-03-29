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


Il y a un infinite scroll pour l'affichage des produits
Les deux composants smarts "List" et "Details" ont pour role de récuperer les données puis délèguent l'affichage. 
Ces deux composants sont génériques, indépendant des ressources a afficher.
