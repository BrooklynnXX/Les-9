for (let i = 0; i < 5; i++){
    console.log(i)
}
let nodigeTijd = document.getElementById("seconden")
let telKnop = document.getElementById("verhoogAantal")
let strongUitkomst = document.getElementById("alGeklikt")
telKnop.addEventListener("click", startTeller)
function startTeller(){
    let startTijd = new Date()
    let doel = document.getElementById("inputDoel").value
    let teller = 0
    doel = doel * 1000000
    while (teller < doel){
        teller += 1
    }
    let stopTijd = new Date()
    strongUitkomst.innerText = teller
    let verstrekenTijd = stopTijd.getTime() - startTijd.getTime()
    console.log(verstrekenTijd)
    nodigeTijd.innerHTML = verstrekenTijd/1000
}