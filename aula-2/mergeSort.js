// abordagem recursiva: divide o array(desordenado) em varias partes para trazer um array(ordenadoordenar um array
const listaLivros = require('./array');


function mergeSort(array, nivelAninhamento = 0){//divide um arrey em dois

  console.log(`Nivel de aninhamento ${nivelAninhamento}`)
  console.table(array)
  if(array.length > 1){
    const meio = Math.floor(array.length / 2)// divide o array(indice) arredondando o numero para baixo
    const parte1 = mergeSort(array.slace(0, meio), nivelAninhamento ++); // fatia o array em duas partes(começo ao meio)
    const parte2 = mergeSorte(array.slace(meio, array.length), nivelAninhamento ++); // fatia o array em duas partes(meio ao final)
    array = ordena(parte1, parte2)

    return array;
  }

}

function ordena(parte1, parte2){
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  let resultado = [];

  while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){ //percorre as duas partes do array
    let livroAtualParte1= parte1[posicaoAtualParte1];
    let livroAtualParte2 = parte2[posicaoAtualParte2];

    if(livroAtualParte1.preco < livroAtualParte2.preco){ //verifica o menor preco entre as duas partes
      resultado.push(livroAtualParte1); //manda o parametro para o ultimo indice do array
      posicaoAtualParte1++
    }else{
      resultado.push(livroAtualParte2); 
      posicaoAtualParte2++
    }
  }                       //posicao atual é menor que o array
  return resultado.concat(posicaoAtualParte1 < parte1.length 
    ? parte1.slice(posicaoAtualParte1) 
    : parte2.slice(posicaoAtualParte2))//concatena o restande do array(parte2) á resultado
}
console.table(mergeSort(listaLivros));