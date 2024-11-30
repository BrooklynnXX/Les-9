document.getElementById("zetOm").addEventListener("click", zetOm);

function zetOm(){
  const koersUSDtoEUR = 0.8780;
  const koersGBPtoEUR = 1.1657;

  const bedrag = document.getElementById("bedrag").value;
  const valuta = document.getElementById("valuta").value;

  let bedragEuro;

  if (valuta === "USD"){
    bedragEuro = bedrag * koersUSDtoEUR;
  }
  else{
    bedragEuro = bedrag * koersGBPtoEUR;
  }

  let nieuwElement = document.createElement("p");
  nieuwElement.innerHTML = bedrag + " " + valuta + " is gelijk aan " + bedragEuro + "&euro;!";
  
  document.getElementById("converterContent").appendChild(nieuwElement);
}