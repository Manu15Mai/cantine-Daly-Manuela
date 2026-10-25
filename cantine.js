// 2. DECLAREZ LES DONNEES DE LA COMMANDE

let client = "Awa";
let codeplat = 1;
let Quantite = "3";
let montantverse = 5000;

// Conversion et validation des donnees
Quantite = Number(Quantite);

if (
  !Number.isInteger(codeplat) ||
  codeplat < 1 ||
  codeplat > 3 ||
  !Number.isInteger(Quantite) ||
  Quantite <= 0 ||
  !Number.isFinite(montantverse) ||
  montantverse < 0
) {
  console.log("Erreur : vérifiez le code du plat, la quantité et le montant versé.");
} else {
  // 3. CALCUL DU MONTANT DE LA COMMANDE
  let prixunitaireplat;
  let typeplat;

  switch (codeplat) {
    case 1:
      prixunitaireplat = 1500;
      typeplat = "Attiéké-poisson";
      break;
    case 2:
      prixunitaireplat = 2000;
      typeplat = "Riz-poulet";
      break;
    case 3:
      prixunitaireplat = 1000;
      typeplat = "Alloco-oeuf";
      break;
  }

  function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
  }

  let montantfinal = calculerTotal(prixunitaireplat, Quantite);

  // 4. AFFICHAGE DU RECAPITULATIF
  console.log(`Client : ${client}`);
  console.log(`Quantité : ${Quantite}`);

  for (let a = 1; a <= Quantite; a++) {
    console.log(`Portion ${a} : ${typeplat} - ${prixunitaireplat} FCFA`);
  }

  console.log(`Montant total : ${montantfinal} FCFA`);

  if (montantverse > montantfinal) {
    console.log(`Votre monnaie est de ${montantverse - montantfinal} FCFA`);
  } else if (montantverse < montantfinal) {
    console.log(`Il reste ${montantfinal - montantverse} FCFA à payer`);
  } else {
    console.log("Le montant est payé exactement.");
  }
}
