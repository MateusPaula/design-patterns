const EstrategiaRota = require("./EstrategiaRota");

class RotaBicicleta extends EstrategiaRota {
    calcularRota(origem, destino) {
        console.log(`Calculando rota para bicicleta de origem ${origem} para destino ${destino}`);
    }
}

module.exports = RotaBicicleta;
