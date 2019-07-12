# Exercice

## Finir de créer les constantes

Dans `src/todos/constants.js`

## Ecrire les reducers (dans src/todos/reducers.js)

`valueReducer` doit traiter l'action TODO_CHANGE qui sera de la forme

```
{
  type: 'TODO_CHANGE',
  payload: 'Acheter du pain',
}
```

Mettre à jour la clé value du state avec action.payload

`itemsReducer` doit traiter TODO_ADD et TODO_DELETE

```
{
  type: 'TODO_ADD',
  payload: {
    id: 0.4565467456,
    title: 'Acheter du pain',
    completed: false,
  }
}
```

Une fois les 3 actions traitées par les reducers, tester avec l'extension redux

## Finir d'écrire les actions creators

Dans `src/todos/actions.js`

Créer les fonctions qui retourne les actions TODO_DELETE et TODO_CHANGE telles que vous les aviez saisies dans l'extension.

## Ecrire les containers (les versions connectées à redux des composants)

Dans `src/todos/containers`

Finir TodoFormContainer en lui passant une fonction onTodoChange aux props (qui doit faire le dispatch de l'action TODO_CHANGE via l'action creator)

Ecrire TodoListContainer qui doit recevoir du state une props todos et créer une props onTodoDelete qui fera le dispatch de TODO_DELETE

