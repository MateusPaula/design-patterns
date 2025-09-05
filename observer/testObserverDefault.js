class Loja {
    constructor() {
        this.produtoDisponivel = false;
    }

    notificarClientes() {
        if (this.produtoDisponivel) {
            console.log('Notificando clientes sobre novo produto...')

            console.log('Cliente A: Produto Disponível!')
            console.log('Cliente B: Produto Disponível!')
            console.log('Cliente C: Produto Disponível!')
        } else {
            console.log('Nenhum produto disponível')
        }
    }

    receberNovoProduto() {
        console.log('Novo produto disponível!')
        this.produtoDisponivel = true;
        this.notificarClientes();
    }
}


const loja = new Loja();

// loja.receberNovoProduto();
loja.notificarClientes();

// Problemas:
// Sistema de notificação é muito acoplado a loja
// A função de notificar Clientes não é flexivel e vai ficar sobrecarregada

// Devemos seguir o princío aberto/fechado para ser aberto a extensão e fechado a modificação