const cliente = {
    nome: 'Jão',
    idade: 24,
    email: 'João@firma.com',
    telefone: ['11555554190', '11444444190'],
};

cliente.enderecos = [
    {
        rua: 'Rua Manilla',
        numero: 2418,
        apartamento: false,
        complemento: '',
    }
];

cliente.enderecos.push({
    rua: 'Rua Jose Hiro',
    numero: 1322,
    apartamento: true,
    complemento: '1, 21'
})

const listaApartamentos = cliente.enderecos.filter(
    (enderecoo) => enderecoo.apartamento === true
);

console.log(listaApartamentos);