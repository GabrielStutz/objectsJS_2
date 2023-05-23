const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item => item[chave].includes(valor)));
}

const encontrado = encontrar(clientes, 'email', 'orajchert1@clickbank.net');
const encontrado2 = encontrar(clientes, 'telefone', '19918820860');

console.log(encontrado, encontrado2);