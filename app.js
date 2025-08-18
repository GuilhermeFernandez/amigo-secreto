//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesSorteio = [];
let nomesSorteados = [];

function exibirTextoNaTela (tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Sorteio do Amigo Secreto');
    exibirTextoNaTela('title', 'Sorteio do Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos participantes');
}

exibirMensagemInicial();

function adicionarAmigo() {
    if (document.querySelector('input').value == '')  {
        alert('Digite um nome válido!');
    } else if (document.querySelector('input').value == nomesSorteio) {
        exibirTextoNaTela('ul', `${document.querySelector('input').value} já está na lista!`);
    }   else {
        let nome = document.querySelector('input').value;
        nomesSorteio.push(nome);
        document.querySelector('input').value = '';
        exibirTextoNaTela('ul', nomesSorteio);
      }

    return
}

function sortearAmigo() {
    let nomeEmbaralhado = Math.floor(Math.random() * nomesSorteio.length);
    let nomeSorteado = nomesSorteio[nomeEmbaralhado];
    
    if (nomesSorteio.length == nomesSorteados.length) {
        exibirTextoNaTela('ul', 'Você precisa escolher novos nomes!');  
    } else if (nomesSorteados.includes(nomeSorteado)) {    
        return sortearAmigo();
    }  else{
        nomesSorteados.push(nomeSorteado);
        exibirTextoNaTela('ul', `O(A) participante ${nomeSorteado} foi sorteado(a)!`);
        return nomeEmbaralhado;
    } 

    
}