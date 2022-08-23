let fone = document.getElementById("firstnom");
let cone = document.getElementById("choseOp");
let ftwo = document.getElementById("secnom");
let sone = document.getElementById("submit");
let ctwo = document.getElementById("calcNom");


sone.onclick = function(){
    if(cone.value ==="*"){
        ctwo.innerHTML = +fone.value * +ftwo.value
    } else if(cone.value ==="/"){
        ctwo.innerHTML = +fone.value / +ftwo.value
    } else if(cone.value ==="-"){
        ctwo.innerHTML = +fone.value - +ftwo.value
    } else if(cone.value ==="+"){
        ctwo.innerHTML = +fone.value + +ftwo.value
    } else {
        ctwo.innerHTML="Null, try again"
    }
}