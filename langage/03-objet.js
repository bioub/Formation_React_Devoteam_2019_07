// fonction classique
function hello(name) {
  return `Hello ${name} !!!`;
}

console.log(hello('Romain'));

// fonction constructeur (à appeler avec new)
function Contact(prenom) {
  // this ici, c'est la référence vers l'objet en cours de création
  this.prenom = prenom; // la propriété est créée dynamique
  // la méthode ici est créé à chaque objet
  // this.hello = function() {
  //   return `Hello ${this.prenom} !!!`;
  // };
}

// la méthode ici est créé une seule fois
Contact.prototype.hello = function() {
  return `Hello ${this.prenom} !!!`;
};

const romain = new Contact('Romain');
console.log(typeof Hello); // function
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Hello Romain !!!

const eric = new Contact('Eric');
console.log(eric.hello()); // Hello Eric !!!


// nouveautés ES6 ou ES2015
class Personne {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    return `Hello ${this.prenom} !!!`;
  }
}

const jean = new Personne('Jean');
console.log(typeof Personne); // function (class === fonction constructeur déguisée)
console.log(typeof jean); // object
console.log(jean.hello()); // Hello Jean !!!