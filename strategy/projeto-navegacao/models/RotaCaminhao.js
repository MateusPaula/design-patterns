const EstrategiaRota = require("./EstrategiaRota");

class RotaCaminhao extends EstrategiaRota{
    calcularRota(origem, destino) {
        console.log(`Calculando rota para caminhão de origem ${origem} para destino ${destino}`);
    }
}

module.exports = RotaCaminhao;