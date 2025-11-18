const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");

function adicionar(){
    if(!tarefa.value) return;
    const li = document.createElement('li');
    li.textContent = tarefa.value;
    li.onclick = () => li.classList.toggle('done');
    li.ondblclick = () => li.remove();
    lista.appendChild(li);
    input.value = " ";
}
