const { edFolha, edGalho } = require('./arrays');

function juntaLista(lista1, lista2){
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let posicaoListaFinal = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];

    if(produtoAtualLista1.preco < produtoAtualLista2.preco){
      listaFinal[posicaoListaFinal] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[posicaoListaFinal] = produtoAtualLista2;
      posicaoAtualLista2++;
    }
    posicaoListaFinal++
  }

  while (posicaoAtualLista1 < lista1.length){//verifica se ainda existe algum elemento na lista1
    listaFinal[posicaoListaFinal] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    posicaoListaFinal++;
  } 
  while (posicaoAtualLista2 < lista2.length){//verifica se ainda existe algum elemento na lista1
    listaFinal[posicaoListaFinal] = lista2[posicaoAtualLista1];
    posicaoAtualLista2++;
    posicaoListaFinal++;
  } 
  return listaFinal;
}
//console.log(edFolha);
//console.log(edGalho);
console.table(juntaLista(edFolha, edGalho));