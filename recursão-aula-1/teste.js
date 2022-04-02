//É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada.
function aguardar(milissegundos){
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}


async function incrementaNumero(numero){
  console.log(numero)
  await aguardar(100)
  if(numero <= 10 ){
    return incrementaNumero(numero + 1)
  }else{
    console.log('Terminei')
  }
}

incrementaNumero(1)