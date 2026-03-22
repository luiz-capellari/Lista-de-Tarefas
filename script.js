let listaCompras = document.querySelector("#app ul");
// O ID lista é uma UL
let buttonadd = document.querySelector("#app button");
// O ID button é um botão
let listaInput = document.querySelector("#app input");
// O ID input é um input

let lista = JSON.parse(localStorage.getItem('lista')) || [];

// Lista que está sendo abastecida pela função Alimentarlista


buttonadd.addEventListener("click", Alimentarlista);

function renderizarlista() {
    // 1. O MAP transforma o array de strings em um array de '<li>texto</li>'
    // 2. O JOIN('') junta esse array em uma única string de texto HTML
    const htmlGerado = lista.map((item, index) => {
        return `<li>${item} 
        <button onclick="deletarTarefa (${index})">
        "Deletar"
        </button> 
        </li>`;
    }).join('');

    // 3. Injetamos tudo de uma vez. O navegador processa isso muito mais rápido.
    listaCompras.innerHTML = htmlGerado;
}

function deletarTarefa(index) {
    lista.splice(index, 1);
    renderizarlista();
    salvarLista();
}

function salvarLista() {
    localStorage.setItem('lista', JSON.stringify(lista));
}


function Alimentarlista() {
    if (listaInput.value.trim() === '') {
        alert("Digite uma Tarefa:");
        return; // Para a execução aqui se estiver vazio
    }

    lista.push(listaInput.value);
    listaInput.value = '';
    renderizarlista();
    salvarLista();
}

renderizarlista();



