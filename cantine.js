// 2. DECLAREZ LES DONNEES DE LA COMMANDE

let client = "Awa";
let codeplat = 1;
let Quantite = "3";
let montantverse = 5000;

// conversion
Quantite = Number(Quantite);

function calculerTotal(prixUnitaire, quantite) {
  return prixUnitaire * quantite;
}

if (
  Number.isInteger(codeplat) &&
  codeplat >= 1 &&
  codeplat <= 3 &&
  Number.isInteger(Quantite) &&
  Quantite > 0 &&
  Number.isFinite(montantverse) &&
  montantverse >= 0
) {
  let typeplat;
  let prixunitaireplat;

  switch (codeplat) {
    case 1:
      typeplat = "Attiéké-poisson";
      prixunitaireplat = 1500;
      break;
    case 2:
      typeplat = "Riz-poulet";
      prixunitaireplat = 2000;
      break;
    case 3:
      typeplat = "Alloco-oeuf";
      prixunitaireplat = 1000;
      break;
  }

  const montantfinal = calculerTotal(prixunitaireplat, Quantite);

  console.log(
    `Client : ${client} | Plat : ${typeplat} | Quantité : ${Quantite} | Montant versé : ${montantverse} FCFA`
  );

  for (let a = 1; a <= Quantite; a++) {
    console.log(`portion ${a} : ${typeplat} - ${prixunitaireplat} FCFA`);
  }

  console.log(`Le montant total est ${montantfinal} FCFA`);

  if (montantverse > montantfinal) {
    const reste = montantverse - montantfinal;
    console.log(`Votre monnaie est de ${reste} FCFA`);
  } else if (montantverse < montantfinal) {
    const apayer = montantfinal - montantverse;
    console.log(`Il vous reste ${apayer} FCFA à payer`);
  } else {
    console.log("Le montant est payé exactement.");
  }
} else {
  console.log(
    "Commande invalide : choisissez un code plat entier entre 1 et 3, une quantité entière positive et un montant versé positif ou nul."
  );
}
