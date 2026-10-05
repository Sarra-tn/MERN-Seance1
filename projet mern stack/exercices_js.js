const produits = [
    { nom: "Clavier", prix: 45 },
    { nom: "Écran", prix: 320 },
    { nom: "Souris", prix: 25 }
];


// Déstructuration
const { nom, prix } = produits[0];

console.log(nom, prix);


// find()
const produitSouris = produits.find(produit => produit.nom === "Souris");

console.log(produitSouris.prix);


// filter()
const produitsMoins100 = produits.filter(produit => produit.prix < 100);

console.log(produitsMoins100);


// Fonction fléchée avecRemise
const avecRemise = prix => prix * 0.9;

console.log(avecRemise(320));