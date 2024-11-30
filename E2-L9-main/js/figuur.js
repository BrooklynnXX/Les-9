document.getElementById("figuur1").addEventListener("click", tekenFiguur1);
document.getElementById("figuur2").addEventListener("click", tekenFiguur2);

function tekenFiguur1(){
  const letters="E3";
  let boodschapTekst=letters;

  while (boodschapTekst.length <20){
    let nieuwElement = document.createElement("p");
    nieuwElement.innerHTML = boodschapTekst;
    document.getElementById("figuurContent").appendChild(nieuwElement);
    boodschapTekst = boodschapTekst + letters;
  }
}

function tekenFiguur2(){
  const letters="abc";
  let boodschapTekst=letters;

  while (boodschapTekst.length <20){
    let nieuwElement = document.createElement("p");
    nieuwElement.innerHTML = boodschapTekst;
    document.getElementById("figuurContent").appendChild(nieuwElement);
    boodschapTekst = boodschapTekst + letters;
  }
}