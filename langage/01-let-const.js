function Hello() {
  const name = 'Romain';

  if (name.length > 0) {
    const maVarConst = 'maVarConst';
    const array = [];
    let maVarLet = 'maVarLet';
    var maVarVar = 'maVarVar';

    // maVarConst = 'maVarConst'; // erreur car la variable est constante
    // array = []; // erreur car la variable est constante
    array.push('Romain'); // l'objet array reste modifiable, c'est la référence qui est constante
  }

  console.log(typeof maVarConst); // undefined (sa portée c'est le block if)
  console.log(typeof maVarLet); // undefined (sa portée c'est le block if)
  console.log(typeof maVarVar); // string (sa portée c'est la fonction Hello)
}

Hello();