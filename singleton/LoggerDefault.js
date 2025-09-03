class Logger {
    constructor() {
        this.logs = [];
    }

    log(message) {
        this.logs.push(message);
        console.log(`Mensagem: ${message}`);
    }

    print() {
        console.log(this.logs.length);
    }
}

module.exports = Logger;