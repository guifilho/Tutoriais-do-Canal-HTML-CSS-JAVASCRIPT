var btnAddNota = document.getElementById("btn-ver-caixa-de-entradas")
var caixaDeEntrdas = document.getElementById("caixa-de-entradas")
var btnFechar = document.getElementById("btn-fechar")
var btnAddNovaNota = document.getElementById("btn-add-nota")
var header = document.querySelector("h3")
var btnEditarNota = document.getElementById("btn-edit-nota")

var entradaTitulo = document.querySelector("input")
var entradaDescricao = document.querySelector("textarea")

btnAddNota.onclick = function() {
  let header = document.querySelector("h3")
  header.textContent = "Add Nova Tarefa"
  btnAddNovaNota.classList.remove("display-none")
  btnEditarNota.classList.add("display-none")
  caixaDeEntrdas.classList.toggle("ver-caixa")
}

function limparEntradas() {
  entradaTitulo.value = ""
  entradaDescricao.value = ""
}

function fecharCaixa() {
  caixaDeEntrdas.classList.remove("ver-caixa")
  limparEntradas()
}

btnFechar.onclick = fecharCaixa

const data = new Date()
const mesNomes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
]

function verMenuFerramentas() {
  var btnFerramentasArray = document.querySelectorAll(".ferramentas")
  btnFerramentasArray.forEach(btnFer => {
    btnFer.onclick = function() {
      btnFer.nextElementSibling.classList.toggle("ver-menu-ferramentas")
    }
  });
}

function deletarNota() {
  let btnsDeletarArray = document.querySelectorAll(".deletar")
  btnsDeletarArray.forEach(btnDel => {
    btnDel.onclick = function() {
      btnDel.parentNode.parentNode.parentNode.remove()
    }
  });
}

function editarNota() {
  let btnsEditarArray = document.querySelectorAll(".editar")
  btnsEditarArray.forEach(btnEdit => {
    btnEdit.onclick = function() {
      let notaAtual = btnEdit.parentNode.parentNode.parentNode
      let titleAtual = notaAtual.querySelector(".titulo")
      let descricaoAtual = notaAtual.querySelector(".descricao")

      caixaDeEntrdas.classList.add("ver-caixa")

      header.textContent = "Editar Nota"

      entradaTitulo.value = titleAtual.textContent
      entradaDescricao.value = descricaoAtual.textContent.trim()

      btnEditarNota.classList.remove("display-none")
      btnAddNovaNota.classList.add("display-none")
      
      btnEditarNota.onclick = function() {
        titleAtual.textContent = entradaTitulo.value
        descricaoAtual.textContent = entradaDescricao.value

        caixaDeEntrdas.classList.remove("ver-caixa")

        entradaTitulo.value = ""
        entradaDescricao.value = ""
      }
    }
  });
}

btnAddNovaNota.onclick = function() {
  let dia = data.getDate()
  let mes = mesNomes[data.getMonth()]
  let ano = data.getFullYear()

  let infoNotas = {
    titulo : entradaTitulo.value,
    descricao : entradaDescricao.value,
    dataHoje : `${dia} de ${mes}, ${ano}`
  }

  if (infoNotas.titulo && infoNotas.descricao) {
    let listDeNotas = document.getElementById("ul-lista-de-notas")
      listDeNotas.innerHTML += `
        <li class="nota">
          <p class="titulo">${infoNotas.titulo}</p>
          <p class="descricao">
            ${infoNotas.descricao}
          </p>
        <div class="configuracoes">
          <div class="data">${infoNotas.dataHoje}</div>
          <button class="ferramentas">
            <span class="material-symbols-outlined">
              more_horiz
            </span>
          </button>
          <div class="ferramentas-menu">
            <button class="editar">
              <span class="material-symbols-outlined">
                edit
              </span>
              <p>Editar</p>
            </button>
            <button class="deletar">
              <span class="material-symbols-outlined">
                delete
              </span>
              <p>Deletar</p>
            </button>
          </div>
        </div>
        </li>
      `
      fecharCaixa()
      verMenuFerramentas()
      deletarNota()
      editarNota()
  } 
  else {
    alert("As Entradas Estão Vazias")
  }
}

