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

const chavesDoObjeto = Object.keys(cliente);