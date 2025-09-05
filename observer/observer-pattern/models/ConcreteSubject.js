const Subject = require("./Subject");

class Loja extends Subject {
    constructor() {
        super();
    }

    adicionarObservers(observer) {
        this.observer.push(observer);
    }

    removerObservers(observer) {
        this.observer = this.observer.filter(subject => subject !== observer);
    }

    notificarObservers() {
        console.log('Notificando assinantes...')
        this.observer.forEach(observer => observer.atualizar());
    }

    receberNovoProduto() {
        console.log('Novo produto disponível!')
        this.notificarObservers();
    }
}

module.exports = Loja;