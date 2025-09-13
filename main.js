//verifica se a $tar tarefas es tá vazia
setInterval(() => {
  const $tar = document.getElementById("tarefas");
  if (!$tar.innerHTML.trim()) {
    $tar.textContent = "Nenhum conteúdo ainda";
    $tar.style.color = "#888";
    $tar.style.fontStyle = "italic";
    $tar.style.textAlign = "center";
    $tar.style.padding = "50px";
    $tar.style.fontSize = "26px"
    console.log("condicional")
  }
  console.log("temporizador")
}, 1000); // verifica a cada 1 segundo

function _criar_div_tarefas($val){
    const $div_tarefas = document.getElementById("tarefas");
    const $nova_div = document.createElement('div');
    $nova_div.id = "item";
    $nova_div.innerHTML = `<input class="checkbox" type="checkbox" />
          <h3 id="tarefa_texto">${$val}</h3>
          <div id="botoe">
          <button class="remover" onclick="_remover_div_tarefas(this)" >Remover</button>
          <button class="editar" onclick="_editar(this)">Editar</button>
          </div>
          `;
    $div_tarefas.appendChild($nova_div)
}

function _remover_div_tarefas(botao){
    const div = botao.parentElement.parentElement;
    div.remove();
    salvarLayout()

}

function _editar(valor){
     const div = valor.parentElement; // pega a div onde o botão está
     const $titulo = div.querySelector("h3");
     const $novo_valor = prompt("digite o novo nome da tarefa!!!")
     $titulo.textContent = $novo_valor;
     salvarLayout()
}

function _adicionar_items(){
    const $tart = document.getElementById("tarefas");
    if($tart.textContent ==  "Nenhum conteúdo ainda"){
        $tart.textContent =""
    };
    const $form = document.getElementById("entrada").value
    debugger
    _criar_div_tarefas($form)
    salvarLayout()
}


function salvarLayout() {
      const layoutHTML = document.getElementById("layout").innerHTML;
      localStorage.setItem("layoutSalvo", layoutHTML);

    }

    function restaurarLayout() {
      const layoutSalvo = localStorage.getItem("layoutSalvo");
      if (layoutSalvo) {
        document.getElementById("layout").innerHTML = layoutSalvo;
      }
    }

    // Restaurar automaticamente ao carregar a página
    window.addEventListener("load", restaurarLayout);