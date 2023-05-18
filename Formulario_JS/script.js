valorA = document.getElementById('VA');
valorB = document.getElementById('VB');
transitionfundo = document.querySelector(".fundo");
button = document.getElementById("button");
form = document.getElementById("formulario");
let infoVAR = document.getElementById("info");
tt = 0;
let timmer;

function calcular(){
    removeall()

    if (valorA.value < valorB.value){

        infoVAR.innerHTML ="VALOR B É MAIOR!";

        alert('Valor B é maior que A!');

        transitionfundo.classList.add("sucess");
        transitionfundo.classList.add("selected");

    }else if(valorA.value > valorB.value){

        infoVAR.innerHTML ="VALOR A É MAIOR!";
        alert('Valor A é maior que B!');
        
        transitionfundo.classList.add("failed")
        transitionfundo.classList.add("selected")
        
        
    } else if(valorA.value = valorB.value){
        
        infoVAR.innerHTML ="VALORES IGUAIS!";
        alert('Os valores são iguais');
        
        transitionfundo.classList.add("none")
        transitionfundo.classList.add("selected")
    }
}

function removeall(){
    transitionfundo.classList.remove("sucess")
    transitionfundo.classList.remove("failed")
    transitionfundo.classList.remove("selected")
    transitionfundo.classList.remove("none")
}

function zerar(){
    infoVAR.innerHTML ="Se o valor 'B' for Maior que 'A' sucesso!";
    valorA.value = 0;
    valorB.value = 0;
    
    removeall()
    
    transitionfundo.classList.add("none")
    transitionfundo.classList.add("selected")    
}

button.addEventListener('click', function(e){
    e.preventDefault()
    calcular();
    resete();
})

function resete(){

    //Ás ultimas 2 horas foi só nisso
    if (tt > 0){
        clearTimeout(timeer);
        tt == 0;
    }

    timeer = setTimeout(zerar, 5000);
    tt++;
}