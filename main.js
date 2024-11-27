const valorDigitacao = document.getElementById('input');
const botSalvar = document.getElementById('botao-salvar');
const listaDeCompras = document.getElementById('Lista-de-compras');
const comprados = document.getElementById('comprados')
const botApagar = document.getElementById('botApagar');
const botAlterar = document.getElementById('botAlterar');
const vazia = document.getElementById('vazia')
const li = document.getElementById('li')
let contador = 0;

// Função para adicionar item à lista
botSalvar.addEventListener('click', apertou);

function apertou(evento) {
    evento.preventDefault();


    // Criando estrutura do novo item
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("conteiner-item");
    containerItemDaLista.id = "container" + contador++
    
    // Nome do item
    const nomeDoItem = document.createElement("label");
    nomeDoItem.innerText = valorDigitacao.value;
    nomeDoItem.classList.add('rotulo');
    
    // Checkbox
    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("checkbox")
    check.addEventListener('click', function() {
        check.classList.add("checkbox");
       
        if (check.checked){
            comprados.appendChild(itemDaLista)
        }
        else{
            listaDeCompras.appendChild(itemDaLista)
            
        }
    })
    

    // Horario
    const horario = document.createElement("p");
    horario.classList.add('horario')
    
    const dataJS = new Date();
    const dia = dataJS.getDate();
    const mes = dataJS.getMonth()+1;
    const hora = dataJS.getHours()
    const mins = dataJS.getMinutes()

    horario.innerText = `Dia: ${dia}/${mes} | horario: ${hora}:${mins}`


    // Botão remover
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("icones");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "./assets/imagemRemover.png";
    imagemRemover.classList.add("imagem-icones");
    botaoRemover.appendChild(imagemRemover);
    

    // Botão alterar
    const botaoAlterar = document.createElement("button");
    botaoAlterar.classList.add("icones");
    botaoAlterar.id="alt"
    const imagemAlterar = document.createElement("img");
    imagemAlterar.src = "./assets/imagemAlterar.png";
    imagemAlterar.classList.add("imagem-icones");
    botaoAlterar.appendChild(imagemAlterar);

    // Montando o item
    containerItemDaLista.appendChild(check);
    containerItemDaLista.appendChild(nomeDoItem);
    containerItemDaLista.appendChild(botaoRemover);
    containerItemDaLista.appendChild(botaoAlterar);
    containerItemDaLista.appendChild(horario);
  
    itemDaLista.appendChild(containerItemDaLista);

    // Adicionando à lista
    listaDeCompras.appendChild(itemDaLista);
    
    
    // zerar o input
    valorDigitacao.value = null

// Função verificadora
    verificar()
 
    // Função do botão cancelar FUNCIONAL
    botaoRemover.addEventListener("click", (evento) => {
    const confirmacao = confirm("deseja excluir esse item?")
    if (evento.target && evento.target.closest("button.icones") && evento.target.closest("button.icones").firstChild.src.includes("imagemRemover.png") && confirmacao) {
        const containerItemDaLista = evento.target.closest(".conteiner-item");
        const itemDaLista = evento.target.closest("li");
        containerItemDaLista.remove();
        itemDaLista.remove();
        verificar();        
    }
});


// Função do botão alterar
botaoAlterar.addEventListener("click", (evento) => {
    const alteracao = prompt("Digite o novo nome do item:")
    if (evento.target && evento.target.closest("button#alt") && evento.target.closest("button#alt").firstChild.src.includes("imagemAlterar.png") && alteracao) {
        const nomeDoItem = document.querySelector(".rotulo")
        nomeDoItem.textContent = alteracao;
    }
});


}

// Função verificadora de Item
function verificar() {
    if (listaDeCompras.childElementCount === 1) {
        vazia.style.display = "block";  // Exibe a mensagem "sua lista está vazia!"
    } else {
        vazia.style.display = "none";  // Oculta a mensagem quando há itens na lista
    }
}


    