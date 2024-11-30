document.getElementById("zegWelkom").addEventListener("click", welkom);

function welkom() {
  const uur = document.getElementById("inputUur").value;
  let boodschapInhoud;

  if (uur < 12){
		boodschapInhoud = "Goeiemorgen";
	}
	else if (uur < 18){
    boodschapInhoud = "Goeiemiddag";
  }
  else{
    boodschapInhoud = "Goeienavond";
  }
  

	let boodschap = document.createElement("p");
	boodschap.innerHTML = boodschapInhoud;

	let div = document.getElementById("welkomContent");
  div.appendChild(boodschap);
}