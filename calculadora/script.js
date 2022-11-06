let campoResultado = document.getElementById('saida-resultado')

//Adicionar Valor no Campo e resultado
let btns = document.querySelectorAll('button')

function inserirValores(e) {
    let elementTarget = e.target
    let conteudoDoBotao = elementTarget.textContent
    campoResultado.innerHTML = campoResultado.textContent.substring() + conteudoDoBotao
}

btns.forEach(btns => {
    btns.addEventListener("click", inserirValores)
});


//Limpar Um a direita no Campo
let limparUm = document.getElementById('btnLimparUm')

limparUm.addEventListener("click", function limparUm() {
    let resultado = campoResultado.textContent
    let resultadoLength = resultado.length
    let resultadoMenosUm = resultado.substring(0, resultadoLength - 1)

    //retorna a string subtraindo o ultimo caracter
    campoResultado.innerHTML = resultadoMenosUm 
})


//Limpar campo completo
let btnC = document.getElementById('btnLimpar')

btnC.addEventListener("click", function limparCampo() {
    campoResultado.innerHTML = ""
})


//calcular Resultado
let btnCalcular = document.getElementById("resultado")

btnCalcular.addEventListener("click", function calculo() {

    if (campoResultado.innerHTML === "undefined") {
        alert("Campo De Calculo Vazio")
        campoResultado.innerHTML = ""
    } else {
        campoResultado.innerHTML = eval(campoResultado.textContent.replace("x", "*").replace("÷", "/").replace("%", "/100"))
    }
})