const url = "http://localhost:3000"
const tabela = document.querySelector("#tabela")
const btnReservar = document.querySelector("#btnReservar");
const pagina1 = document.querySelector("#pagina1")
const pagina2 = document.querySelector("#pagina2")
const inputMarca = document.querySelector('#marca');
const inputModelo = document.querySelector('#modelo');
const inputAno = document.querySelector('#ano');
const inputPreco = document.querySelector('#preco');
const conteudoTabela = document.querySelector('#conteudoTabela');
const mensagem = document.querySelector('#mensagem');

let motos = [];
getMotos()
renderizarTabela()

function getMotos() {
    motos.JSON.parse(localStorage.getItem
        ('motos')) || []
}

function setMotos() {
    localStorage.setItem("motos", JSON.stringify
        (motos))
}

function addMotos(marca, modelo, ano, preco) {
    let motos = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        preco: preco

    }

    motos.push(motos)
    setMotos()
    mostrarMensagem("Moto Adicionada!!")
}

btnAddVeiculo.addEventListener('click', function (e) {
    e.preventDefault()
    addMotos(inputMarca.value, inputModelo.value, inputAno.value, inputPreco.value);
    console.table(motos);
    limparFormulario()
    renderizarTabela()
})

function limparFormulario() {
    inputMarca.value= ''
    inputModelo.value= ''
    inputAno.value= ''
    inputPreco.value= ''
    inputMarca.focus()
}
function mostrarMensagem(texto){
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(function() {
        mensagem.style.display = 'none'
        mensagem.innerHTML = ''
    }, 3000)
}

async function listarMotos(pagina) {
    await fetch(`${url}/motos?_page=${pagina}`)
        .then(response => { return response.json() })
        .then(response => motos = response.data)
        .catch(error => console.log(error))
}

async function run(pagina) {
    await listarMotos(pagina)
    renderizarTabela()
}

run(1)
function renderizarTabela() {
    tabela.innerHTML = `
        <table class = tabela>
            <tr>
                <th>marca</th>
                <th>modelo</th>
                <th>ano</th>
                <th>preco</th>
            </tr>
            ${motos.map(moto =>
        `
                <tr>
                    <td>${moto.marca}</td>
                    <td>${moto.modelo}</td>
                    <td>${moto.ano}</td>
                    <td>${moto.preco}</td>
                </tr>
                `
    ).join('')}
        </table>
    `;
}
pagina1.addEventListener("click", (e) => {
    e.preventDefault();
    run(1)
});
pagina2.addEventListener("click", (e) => {
    e.preventDefault();
    run(2)
});
