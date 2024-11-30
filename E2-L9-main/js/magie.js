document.getElementById("magieKnop").addEventListener("click", pasTekstAan);

function pasTekstAan(){
  let tekst = document.getElementById("aanTePassenTekst");
  tekst.innerHTML = "Deze tekst verschijnt via JavaScript!!!";
}