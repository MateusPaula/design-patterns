const Observer = require("./Observer");

class Cliente extends Observer {
    constructor(nome) {
        super();
        this.nome = nome;
    }

    atualizar() {
        console.log(`${this.nome} foi notificado sobre novo produto disponível!`)
    }
}

module.exports = Cliente;