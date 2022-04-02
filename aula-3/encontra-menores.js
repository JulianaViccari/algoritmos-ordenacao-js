// encontra o pivo do array e ordena os valores menores que o pivo á esquerda... o restante fica desordenado.
const listaLivros = require('../aula-2/array');

function encontraMenores(pivo, array) {// encontra quantidade de valores menores
  let qtdMaisBaratosPivo = 0;

  for(let atual = 0; atual < array.length; atual++){// quantos livros é menor que o pivo, lê todos do array e compara
    let livroAtual = array[atual]
    if(livroAtual.preco < pivo.preco){
      qtdMaisBaratosPivo++
    }
  }
  
  trocaLugar(array, array.indexOf(pivo), qtdMaisBaratosPivo)

  return array;
}

function trocaLugar(array, de, para){// de: indice do pivo -- para: indice que representa onde deve ser armazenado
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

function divideNoPivo(array) {
  //console.log("**Array original**", array)
  let pivo = array[Math.floor(array.length / 2)]; // divide o array por2 e pega o meio do array para comparar
  encontraMenores(pivo, array);
  let valoresMenores = 0;
  
  for(let confere = 0; confere < array.length; confere++){
    let atual = array[confere];
    if(atual.preco <= pivo.preco && atual !== pivo){//compara valor do pivo com o indice percorrido
      trocaLugar(array, confere, valoresMenores)
      valoresMenores++;
    }
  }
  //console.log(" *** Pivo***", pivo);
  //console.log("Quantidade de objetos com valor menor que o Pivo => ",valoresMenores);
  //console.log("Array com ordenação á esquerda após encontrar o Pivo ");

  return array;
}

//console.table(divideNoPivo(listaLivros))
 //console.table(encontraMenores(listaLivros[2], listaLivros))
 module.exports = trocaLugar;