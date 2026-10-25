let client = "Awa";
let codeplat = 1;
let Quantite = "3";
let montantverse = 5000; 

 //conversion

Quantite = Number(Quantite);

  // le montant de la commande
let prixunitaireplat = 0;
if (codeplat >= 1 && codeplat <= 3 && Quantite > 0){
switch (codeplat){
    case 1:
        prixunitaireplat = 1500; 
    console.log(`le prix est ${prixunitaireplat}`); break;
    case 2:
        prixunitaireplat = 2000; 
        console.log(`le prix est ${prixunitaireplat}`); break;
    case 3:
        prixunitaireplat = 1000; 
        console.log(`le prix est ${prixunitaireplat}`); break;
    default:
        console.log(`erreur de commande`); 
}

//  // le montant total
 
//  function calculerTotal(prixUnitaire, quantite) {
// let Montanttotal = prixUnitaire * quantite;
// return Montanttotal;
//  }

// let montantfinal = calculerTotal(prixunitaireplat, Quantite);

// // le recapitulatif
//  let typeplat;

//  if(codeplat === 1){ typeplat = `Attiéké-poisson`}
//  else if(codeplat === 2){typeplat =`Riz-poulet`}
// else{`typeplat = Alloco-oeuf`}


// for (let a = 1; a <= Quantite; a++){
//   console.log(`portion ${a} : ${typeplat} - ${prixunitaireplat} FCFA`); 
// }

// console.log(`chere, ${client} le montant totale est ${montantfinal} FCFA`);

// if(montantverse > montantfinal){
// let reste = montantverse - montantfinal;
// console.log(`votre monnaie est ${reste}`);
// }

// else{
// let apayer = montantfinal - montantverse;
// console.log(`vous devez payer ${apayer}`);   
// }

// }

// else{
// console.log(`choississez un code plat valide entre 1 et 3 et une Quantite strictement positive`);

// }