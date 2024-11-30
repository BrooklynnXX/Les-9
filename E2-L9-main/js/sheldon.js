document.getElementById("sheldon").addEventListener("click", klopOpDeur);

function klopOpDeur(){
  for (let i = 0; i < 3; i++){
    let boodschap = document.createElement("p");
    boodschap.innerHTML = "Penny... ";
    
    let div = document.getElementById("sheldonContent");
    div.appendChild(boodschap); 
  }
}