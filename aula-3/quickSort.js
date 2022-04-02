const listaLivros = require('../aula-2/array');
const trocaLugar = require('./encontra-menores');

function quickSort(array, esquerda, direita){//
  if (array.length > 1){
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual -1){
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita){
      quickSort(array, indiceAtual, direita);

    }
    return array;
  
  }
  return array;
}
function particiona(array, esquerda, direita) {
  let pivo = array[Math.floor((esquerda + direita) / 2)];
  let atualEsquerda = esquerda;
  let atualDireita = direita;

  while(atualEsquerda <= atualDireita){
    while(array[atualEsquerda].preco < pivo.preco){
      atualEsquerda++
    }
    while(array[atualDireita].preco > pivo.preco){
      atualDireita--
    }
    if(atualEsquerda <= atualDireita){
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

//console.table(quickSort(listaLivros, 0, listaLivros.length - 1))

module.exports = quickSort;