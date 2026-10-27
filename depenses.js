// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {

  return depenses.reduce((a,b) => a+b, 0)
}
console.log("somme : " + calculerTotal(depensesSemaine) + "FCFA")
// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  // Votre code ici.
  if(depensesSemaine.length === 0){
     return 0
  }
 else{
  return depenses.reduce((a,b) => (a+b) / depensesSemaine.length, 1);
}
}
console.log(`la moyenne est : ${calculerMoyenne.length, 1} FCFA`)
// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  // Votre code ici.
  return depenses.filter((n) => n>=2000);
}
console.log(`les montantsstrictement supperieurs à 2000 FCFA sont : ${filtrerGrossesDepenses(depensesSemaine)} FCFA`)
// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  // Votre code ici.
  if(depenses.length === 0){
    return 0 }
 else{
   return (Math.max(...depenses))
}
}
console.log(`la plus grande depense est : ${depensesSemaine}`)

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.

function trierDepenses(depenses){
  return [...depenses].sort((a,b) => a - b)
}
console.log(`tableau initial avant le tri : ${depensesSemaine}`)
const tri = trierDepenses(depensesSemaine);
console.log(`la copie triée : ${tri}`)
console.log(`tableau initial après le tri : ${depensesSemaine}`);

  
