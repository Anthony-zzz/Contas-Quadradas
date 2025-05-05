// Elementos da página
const inputTarefa = document.getElementById('nova-tarefa');
const botaoAdicionar = document.getElementById('adicionar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// Função para carregar as tarefas armazenadas no localStorage
function carregarTarefas() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.forEach(tarefa => adicionarTarefaNaLista(tarefa.texto, tarefa.completa));
}

// Função para adicionar tarefa na lista e no localStorage
function adicionarTarefa(texto, completa = false) {
  const tarefa = {
    texto: texto,
    completa: completa
  };

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  adicionarTarefaNaLista(texto, completa);
}

// Função para adicionar tarefa na lista visual
function adicionarTarefaNaLista(texto, completa) {
  const li = document.createElement('li');
  li.classList.toggle('completed', completa);
  
  li.innerHTML = `
    <span>${texto}</span>
    <button class="remove">Remover</button>
  `;

  // Marcar a tarefa como concluída ao clicar
  li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('completed');
    atualizarTarefa(texto);
  });

  // Remover tarefa ao clicar no botão de remoção
  li.querySelector('.remove').addEventListener('click', () => {
    removerTarefa(texto);
    li.remove();
  });

  listaTarefas.appendChild(li);
}

// Função para atualizar o status de uma tarefa no localStorage
function atualizarTarefa(texto) {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const tarefa = tarefas.find(t => t.texto === texto);
  tarefa.completa = !tarefa.completa;
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para remover uma tarefa do localStorage
function removerTarefa(texto) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas = tarefas.filter(t => t.texto !== texto);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Adicionar tarefa ao clicar no botão
botaoAdicionar.addEventListener('click', () => {
  const textoTarefa = inputTarefa.value.trim();
  if (textoTarefa) {
    adicionarTarefa(textoTarefa);
    inputTarefa.value = ''; // Limpar campo de entrada
  }
});

// Carregar as tarefas armazenadas ao carregar a página
window.onload = carregarTarefas;
