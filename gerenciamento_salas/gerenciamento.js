let inputTarefa = document.querySelector('#tarefa');
let inputData = document.querySelector('#data');
let conteudoTabela = document.querySelector('#conteudoTabela');
let mensagem = document.querySelector('#mensagem');

let tarefas= [];
getTarefas()
renderizarTabela()

function getTarefas(){
    livros.JSON.parse(localStorage.getItem
        ('tarefas')) || []
}

function setTarefas(){
    localStorage.setItem("tarefas", JSON.stringify
        (tarefas))
}

function addTarefa(tarefa, data){
    let tarefa = {
        tarefa: tarefa,
        data: data
    }

    tarefas.push(tarefa)
    setTarefas()
    mostrarMensagem("Tarefa Adicionada!!!")
}

btnAddTarefa.addEventListener('click', function(e) {
    e.preventDefault()
    addLivro(inputTarefa.value, inputData.value);
    console.table(tarefas);
    limparFormulario()
    renderizarTabela()
})

function limparFormulario(){
    inputTarefa.value = ''
    inputData.value = ''
    inputTarefa.focus()
}

function renderizarTabela(){texto
    conteudoTabela.innerHTML = `
        <table class='tarefa'>
            <tr>
                <th>Tarefa</th>
                <th>Data</th>
            </tr>
            ${tarefas.map(tarefa =>
                `<tr>
                    <td>${tarefa.tarefa}</td>
                    <td>${tarefa.data}</td>
                </tr>`
            ).join('')}
        </table>
    `
}

function mostrarMensagem(texto){
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(function() {
        mensagem.style.display = 'none'
        mensagem.innerHTML = ''
    }, 3000)
}