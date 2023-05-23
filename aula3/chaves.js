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

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário incluir um endereço cadastrado!")
}