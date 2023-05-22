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

for(let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
    
}