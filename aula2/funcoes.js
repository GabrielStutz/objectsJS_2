const cliente = {
    nome: 'Jão',
    idade: 24,
    email: 'João@firma.com',
    telefone: ['11555554190', '11444444190'],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(200)