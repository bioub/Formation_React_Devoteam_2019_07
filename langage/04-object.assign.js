const state = {
  prenom: 'Romain',
};

const newState = Object.assign({}, state, {
  nom: 'Bohdanowicz',
});

// {"prenom":"Romain","nom":"Bohdanowicz"}
console.log(JSON.stringify(newState));

// Object.assign c'est ce qui fait derrière setState


// Attention les sous-objets (ou tableau) ne fusionnent pas
const stateAvecSousObj = {
  prenom: 'Romain',
  adresse: {
    ville: 'Paris',
  }
};

const newStateAvecSousObj = Object.assign({}, state, {
  adresse: {
    cp: '75017',
  },
});

// {"prenom":"Romain","addresse":{"cp":"75017"}}
console.log(JSON.stringify(newStateAvecSousObj));