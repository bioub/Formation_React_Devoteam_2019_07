# Exercice

Dans App.js créer le composant Select comme ceci :

```
const items = [
  {value: 'romain', label: 'Romain'},
  {value: 'eric', label: 'Eric'},
  {value: 'jean', label: 'Jean'},
];
<Select items={items} />
```

Le rendu devra être (`<div className="Item">` créé à partir de `props.items`) :

```
<div className="Select">
  <div className"Selected">Romain</div>
  <div className"Items">
    <div className="Item">&rarr; Romain</div>
    <div className="Item">Eric</div>
  </div>
</div>
```

La valeur dans `<div className"Selected">Romain</div>` doit être stocké sur le state

Au clic d'une balise `<div className="Item">Eric</div>` stocker sur le state la valeur sélectionnée

Afficher une flèche &rarr; sur l'élement sélectionné dans :

```
<div className"Items">
  <div className="Item">&rarr; Romain</div>
  <div className="Item">Eric</div>
</div>
```