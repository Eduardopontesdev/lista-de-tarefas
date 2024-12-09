function novaTarefa() {
  let input = document.getElementById("input-nova-tarefa");

  let tarefa = input.value;

  if (tarefa) {
    if (tarefa == " ") {
      alert("A tarefa esta vazia");
    } else {
      let li = document.createElement("li");
      li.innerHTML =
        tarefa.toUpperCase() + ' <button onClick="removerTarefa(this)">X</button>';

      let ul = document.getElementById("ul-tarefa");
      ul.appendChild(li);

      input.value = " ";
    }
  } else {
    alert("A tarefa esta vazia");
  }
}

function removerTarefa(li) {
  li.parentElement.remove();
}
