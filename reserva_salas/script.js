const url = "http://localhost:3000"
const tabela = document.querySelector("#tabela")
const atividade = document.querySelector("#atividade")
const sala = document.querySelector("#sala")
const dataInicial = document.querySelector("#data_inicial")
const dataFinal = document.querySelector("#data_final")
const btnReservar = document.querySelector("#btn-reservar")


let reservas = []

async function listarReservas(){
    await fetch(`${url}/reservas`)
        .then(response => { return response.json()})
        .then(response => reservas = response)
        .catch(error => console.log(error))
}

async function addReserva() {
    const reserva = {
        atividade: atividade.ariaValueMax,
        sala: sala.ariaValueMax,
        dataInicial: new Date(dataInicial.vale),
        dataFinal: new Date (dataFinal.value)
    }
    
    await fetch(`${url}/reservas`,{
        method:`POST`,
        headers: {"Content-typer":"application/json"},
        body : JSON.stringify(reserva)})
        .then(response => console.log (response))
        .catch(error => console.log(error))

    }

async function run() {
    await listarReservas()
    renderizarTabela()
}

run()
function renderizarTabela(){
    tabela.innerHTML = `
        <table class = tabela>
            <tr>
                <th>Atividade</th>
                <th>Sala</th>
            </tr>
            ${reservas.map(reserva =>
                `
                <tr>
                    <td>${reserva.id}</td>
                    <td>${reserva.sala}</td>
                </tr>
                `
            ).join('')}
        </table>
    `;
}

listarReservas()