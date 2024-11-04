const listaUsuarios = document.querySelector(".lista-usuarios");
const items = document.querySelectorAll(".item");

// Adicionar alguns eventos aos itens para arrastá-los e soltá-los na lista
items.forEach(item => {
    // Adiciona a classe "arrastando" ao item com um leve atraso para indicar visualmente que ele está sendo arrastado
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("arrastando"), 10);
    });

    // Este evento é disparado quando terminamos de arrastar o item
    item.addEventListener("dragend", () => {
        // Removemos a classe "arrastando" para que ele volte ao seu estilo normal
        item.classList.remove("arrastando");
    });
});

// Função que permiti que a lista saiba onde inserir o item arrastado
const iniciarListaUsuarios = (e) => {
    // Metodo padrão do js que previne o comportamento padrão do evento, que poderia impedir o drop correto
    e.preventDefault();

     // Seleciona o item que está sendo arrastado atualmente
    const arrastando_item = listaUsuarios.querySelector(".arrastando");

     // Cria uma lista com todos os itens, excluindo o que estamos arrastando
    const itemsIrmaos = Array.from(listaUsuarios.querySelectorAll(".item:not(.arrastando)"));

     // Encontramos o item "irmão" onde queremos inserir o item arrastado
    let proxItemIrmao = itemsIrmaos.find(itemIrmao => {
        // Aqui usamos a posição vertical do mouse para encontrar o ponto exato onde soltar o item
        // e.clientY dá a posição vertical do cursor
        return e.clientY <= itemIrmao.offsetTop + itemIrmao.offsetHeight / 2;
    });

    // Inserimos o item que estamos arrastando antes do próximo item encontrado
    listaUsuarios.insertBefore(arrastando_item, proxItemIrmao);
};

// Adiciona alguns eventos à lista para garantir que ela permita o drop
listaUsuarios.addEventListener("dragover", iniciarListaUsuarios);

// dragover e dragenter trabalham juntos para permitir o drop do item
listaUsuarios.addEventListener("dragenter", e => e.preventDefault());