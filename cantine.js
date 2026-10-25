// 2. DECLAREZ LES DONNEES DE LA COMMANDE

let client = "Awa";
let codeplat = 1;
let Quantite = "3";
let montantverse = 5000;

// conversion
Quantite = Number(Quantite);
console.log("client:" + client, "code du  plat:"  + codeplat, " Quantite:" +  Quantite, "montant verse:"  +  montantverse );

// 3. LE MONTANT DE LA COMMANDE

let prixunitaireplat = 0;
if (codeplat >= 1 && codeplat <= 3 && Quantite > 0) {
 switch (codeplat) {
   case 1:
     prixunitaireplat = 1500;
     console.log(`le prix est ${prixunitaireplat}`);
     break;
   case 2:
     prixunitaireplat = 2000;
     console.log(`le prix est ${prixunitaireplat}`);
     break;
   case 3:
     prixunitaireplat = 1000;
     console.log(`le prix est ${prixunitaireplat}`);
     break;
   default:
     console.log(`erreur de commande`);
 }

 // le montant total
 function calculerTotal(prixUnitaire, quantite) {
   return prixUnitaire * quantite;
 }

 let montantfinal = calculerTotal(prixunitaireplat, Quantite);
 console.log(`le montant total est ${montantfinal} FCFA`);
} else {
 console.log(`choisissez un code plat valide entre 1 et 3 et une quantité strictement positive`);
}
