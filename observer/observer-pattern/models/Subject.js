class Subject {
    constructor() {
        this.observer = [];
    }

    adicionarObservers(observer) {
        throw new Error('Método adicionarObservers precisa ser implementado');
    }

    removerObservers(observer) {
        throw new Error('Método removerObservers precisa ser implementado');
    }

    notificarObservers() {
        throw new Error('Método notificarObservers precisa ser implementado');
    }
}

module.exports = Subject;