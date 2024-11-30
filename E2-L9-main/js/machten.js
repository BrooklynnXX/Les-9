let macht = 2;

while (macht < 100){
  let boodschap = document.createElement("p");
  boodschap.innerHTML = macht;
  
  let div = document.getElementById("machtenContent");
  div.appendChild(boodschap);

  macht = macht * 2;
}