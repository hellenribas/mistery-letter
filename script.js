function pegaId (id) {
    return document.getElementById(id);
}
function criaElem (tag) {
    return document.createElement(tag);
}
function evento (id, type, callback) {
    const idPai = pegaId(id);
    return idPai.addEventListener(type, callback);
}
const pai = pegaId('menu'); 
const texto = pegaId('carta-gerada');
const input = pegaId('carta-texto');
let words = [];

function remove () {
    texto.innerHTML = '';
    return texto
}
function botao () {
    const botao = criaElem('button');
    botao.id = 'criar-carta';
    const text = document.createTextNode('Gerar Carta');
    botao.appendChild(text);
    pai.appendChild(botao);
}
function arrayPalavras () {
    let textInput = input.value;
     words = textInput.split(' ');
    return words;
}
function carta () {
    remove();
    arrayPalavras();
    for (let index = 0; index < words.length; index += 1) {
    let tagTexto = criaElem('span');
    tagTexto.innerText = words[index];
    texto.appendChild(tagTexto);    
    }
    aleatorio();
}
//Obtive ajuda do Emerson Alves no racicionio da condicional (linha 45).
function verificar () {
    if(!input.value.match(/\S/)) {
       texto.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
        carta();
    }
}
function aleatorio () {
    let array = ['newspaper', 'magazine1', 'magazine2', 'big', 'medium', 'reallybig', 'rotateleft', 'rotateright','skewleft', 'skewright']
    for (index = 0; index < texto.children.length; index += 1 ) {
        let random = parseInt(Math.random() * 3);
        texto.children[index].classList.add(array[random]);
    }
}
botao();
evento('criar-carta', 'click', verificar);

