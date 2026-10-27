  // 2. DECLAREZ LES DONNEES DE LA COMMANDE

let client = "Awa";
let codeplat = 1;
let Quantite = "3.1";
let montantverse = 5000;

// Conversion et validation des donnees
Quantite = Number(Quantite);

   //3. LE MONTANT DE LA COMMANDE

let prixunitaireplat = 0;
let typeplat;

if (codeplat >= 1 && codeplat <= 3 && Quantite > 0 && Quantite % 1 === 0){
switch (codeplat){
    case 1:
        prixunitaireplat = 1500;
        typeplat = "Attiéké-poisson";
    console.log(`le prix est ${prixunitaireplat} : ${typeplat}`); break;
    case 2:
        prixunitaireplat = 2000;
        typeplat = "Riz-poulet"; 
        console.log(`le prix est ${prixunitaireplat} : ${typeplat} `); break;
    case 3:
        prixunitaireplat = 1000;
        typeplat = "Alloco-oeuf" 
        console.log(`le prix est ${prixunitaireplat} : ${typeplat}`); break;
    default:
        console.log(`erreur de commande`); 
}

 // le montant total
 
 function calculerTotal(prixUnitaire, quantite) {
let Montanttotal = prixUnitaire * quantite;
return Montanttotal;
 }

let montantfinal = calculerTotal(prixunitaireplat, Quantite);

    //4. AFFICHEZ LE RECAPPITULATIF 



for (let a = 1; a <= Quantite; a++){
  console.log(`portion ${a} : ${typeplat} - ${prixunitaireplat} FCFA`); 
}

console.log(`chere, ${client} le montant totale est ${montantfinal} FCFA`);

if(montantverse > montantfinal){
let reste = montantverse - montantfinal;
console.log(`votre monnaie est ${reste}`);
}

else{
let apayer = montantfinal - montantverse;
console.log(`vous devez payer ${apayer}`);   
}

}

else{
console.log(`choississez un code plat valide entre 1 et 3 et une Quantite strictement positive, différent d'un nombre décimal`);

}
