const boodschap = document.getElementById("boodschap");
const boodschapTekst = boodschap.innerHTML;

//Eerste alinea met vaste tekst
let uitleg = document.createElement("p");
uitleg.innerHTML = "En deze verwelkoming wordt geplaatst via JS:";

let div = document.getElementById("zegHeyContent");
div.appendChild(uitleg);

//Tweede alinea met zelfde tekst als in HTML
let nieuweBoodschap = document.createElement("p");
nieuweBoodschap.innerHTML = boodschapTekst;

div.appendChild(nieuweBoodschap);