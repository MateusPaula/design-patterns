const EstrategiaRota = require("./EstrategiaRota");

class RotaCarro extends EstrategiaRota{
    calcularRota(origem, destino) {
        console.log(`Calculando rota para carro de origem ${origem} para destino ${destino}`);
    }
}

module.exports = RotaCarro;