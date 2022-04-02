const listaLivros = require('../aula-2/array');

const quickSort = require('../aula-3/quickSort');

const listaOrdenada = quickSort(listaLivros, 0, listaLivros.length - 1)

module.exports = listaOrdenada;