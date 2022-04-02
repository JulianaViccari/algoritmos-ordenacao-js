// busca binaria, sempre divide a lista em duas partes e procura em uma das duas sempre dividindo a lista.
//para busca binaria funcionar a lista precisa estar ordenada
const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado){
  console.log(`de ${de} ate ${ate}`)
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio];

  if(de > ate){//returna -1 caso nao exista o valorBuscado(casoBase)
    return - 1;
  }

  if(valorBuscado === atual.preco){
    return meio;
  }
  if(valorBuscado < atual.preco){
    return busca(array, de, meio -1, valorBuscado);
  }
  if(valorBuscado > atual.preco){
    return busca(array, meio + 1, ate, valorBuscado);
  }

}
console.log(busca(listaLivros, 0, listaLivros.length -1, 1))//devolve o indice do valor buscado