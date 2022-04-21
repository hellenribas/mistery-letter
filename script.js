function pegaId(id) {
  return document.getElementById(id);
}
function criaElem(tag) {
  return document.createElement(tag);
}
function evento(id, type, callback) {
  const idPai = pegaId(id);
  return idPai.addEventListener(type, callback);
}

const cartaGerada = 'carta-gerada';
const pai = pegaId('menu');
const texto = pegaId(cartaGerada);
const input = pegaId('carta-texto');
const contar = pegaId('carta-contador');
let words = [];
const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['big', 'medium', 'reallybig'];
const rotates = ['rotateleft', 'rotateright'];
const skews = ['skewleft', 'skewright'];

function remove() {
  texto.innerHTML = '';
  return texto;
}
function botaoFunc() {
  const botao = criaElem('button');
  botao.id = 'criar-carta';
  const text = document.createTextNode('Gerar Carta');
  botao.appendChild(text);
  pai.appendChild(botao);
}
function arrayPalavras() {
  const textInput = input.value;
  words = textInput.split(' ');
  return words;
}
function cont() {
  let contador = 0;
  const arrayWords = arrayPalavras();
  for (let i = 0; i < arrayWords.length; i += 1) {
    if (words[i] !== '') {
      contador += 1;
    }
  }
  contar.innerText = contador;
}

function aleat() {
  const aleNum3 = parseInt(Math.random() * 3, 10);
  const aleNum2 = parseInt(Math.random() * 2, 10);
  return `${styles[aleNum3]} ${sizes[aleNum3]} ${rotates[aleNum2]} ${skews[aleNum2]}`;
}
// Obtive ajuda do Emerson Alves no racicionio da condicional (linha 45).
function classificando() {
  for (let index = 0; index < texto.children.length; index += 1) {
    texto.children[index].className = aleat();
  }
  cont();
}
function carta() {
  remove();
  arrayPalavras();
  for (let index = 0; index < words.length; index += 1) {
    if (words[index] !== '') {
      const tagTexto = criaElem('span');
      tagTexto.innerText = words[index];
      texto.appendChild(tagTexto);
    }
  }
  classificando();
}
function verificar() {
  if (!input.value.match(/\S/)) {
    texto.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    carta();
  }
}

botaoFunc();
evento('criar-carta', 'click', verificar);
evento(cartaGerada, 'click', (event) => {
  if (event.target.id !== cartaGerada) {
    const eventos = event;
    eventos.target.className = aleat();
  }
});
