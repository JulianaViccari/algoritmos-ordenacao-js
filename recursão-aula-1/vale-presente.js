const listaLivros = require('../aula-2/array');

const vale = 30;

const presentes = listaLivros.filter(
   livro => livro.preco <= vale)

console.log(presentes)
