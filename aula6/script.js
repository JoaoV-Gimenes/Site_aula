// const titulo = document.querySelector('h1')
// console.log(titulo)
// titulo.textContent = 'Novo título para o exercício'

// //const container = document.getElementById('container')
// const container = document.querySelector('#container')
// console.log(container)

// container.innerHTML = '<p>Novo Parágrafo</p>'

// const caixa = document.querySelector('.box')
// caixa.style.height = '100px'
// caixa.style.width = '100px'
// caixa.style.backgroundColor = 'green'

// caixa.classList.add('oculto')
// caixa.classList.remove('oculto')

// const botao = document.querySelector('.but')
// botao.addEventListener('click', () => {
//     caixa.classList.toggle('oculto')
// })

// const lista = document.createElement('li')
// lista.textContent = 'Novo item'
// document.querySelector('ul').appendChild(lista)

// const add = document.querySelector('.adicion').addEventListener('click', () => {
//     const novoItem = document.createElement('li')
//     document.querySelector('ul').appendChild(novoItem)
// })

// const remover = querySelector('.remove').addEventListener('click', () =>{
//     document.querySelector('ul').removeChild('li')
// })
// localStorage.setItem('nome', 'João')
// localStorage.setItem('nome2', 'Daniel')
// localStorage.setItem('nome3', 'Thiago')







// Array para tarefas
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Função para renderizar lista
function renderizarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";
  tarefas.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    lista.appendChild(li);
  });
}

renderizarTarefas();

document.getElementById("form-tarefa").onsubmit = function (e) {
  e.preventDefault();
  const input = document.getElementById("input-tarefa");
  tarefas.push(input.value);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  input.value = "";
  renderizarTarefas();
};

document.getElementById("btn-limpar").onclick = function () {
  tarefas = [];
  localStorage.removeItem("tarefas");
  renderizarTarefas();
};