var btns = document.querySelector(".btn-acao")
var btnClose = document.getElementById("btn-close")
var listaDeNotificação = document.querySelector("ul")

const notificacoesDetalhes = {
  sucesso : {
    icone : "check_circle",
    texto : "Sucesso: Notificação de Sucesso"
  },
  erro : {
    icone : "cancel",
    texto : "Erro: Notificação de Erro"
  },
  alerta : {
    icone : "warning",
    texto : "Alert: Notificação de Alerta"
  },
  info : {
    icone : "info",
    texto : "Info: Notificação de Informação"
  }
}

function criarNotifcacao(tipo, icone, texto) {
  const li = document.createElement("li")
  listaDeNotificação.appendChild(li)
  li.innerHTML += `
    <div class="notificacao ${tipo}">
    <div class="container">
      <div class="label">
        <span class="material-symbols-rounded">${icone}</span>
        <p>${texto}</p>
      </div>
      <button id="btn-close" class="fechar">&#215</button>
    </div>
    <div class="barra-de-progesso"></div>
    </div>
  `
  removerClick()
  removerDepoisDe5seg()
}

var arrayBtns = btns.childNodes
arrayBtns.forEach(btn => {
  let name = btn.name
  btn.addEventListener("click", () => criarNotifcacao(
    name,
    notificacoesDetalhes[name].icone,
    notificacoesDetalhes[name].texto
  ))
});


function removerClick() {
  let btnsFechar = document.querySelectorAll(".fechar")

  btnsFechar.forEach(btnF => {
    btnF.onclick = function () {
      let notificacaoAtual = btnF.parentElement.parentElement.parentElement
      notificacaoAtual.classList.add("esconder-remover-notificacao")
      setTimeout(() => notificacaoAtual.remove(), 500);
    }
  });
}

function removerDepoisDe5seg() {
  let notificacoes = listaDeNotificação.childNodes
  
  notificacoes.forEach(noti => {
    setTimeout(() => {
      noti.classList.add("esconder-remover-notificacao");
      setTimeout(() => noti.remove(), 350);
    }, 5000);
  });
}