form = document.getElementById('novoscontatos');
bttadd = document.getElementById('container-button');

display = document.querySelector('.fundo');
scrolll = document.querySelector('.container')

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputNome = document.getElementById('name');
    const inputNumber = document.getElementById('number');
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumber.value}</td>`;
    linha += '<tr>';
    
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    /*alert(`${inputNome.value} Adicionado a lista de contatos`);
    
    inputNome.value = ""
    inputNumber.value =""*/

    removeall()
    esquerda()
});

bttadd.addEventListener('click', function(e){
    e.preventDefault();

    removeall();
    direita();
});

function removeall() {
    display.classList.remove("displayR");
    display.classList.remove("displayL");
}

function direita() {
    scrolll.scrollLeft = 200;
    display.classList.add("displayR");
}

function esquerda() {
    scrolll.scrollLeft = 0;
    display.classList.add("displayL");
}
