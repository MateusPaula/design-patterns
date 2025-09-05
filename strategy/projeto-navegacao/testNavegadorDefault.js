class Navegador {
    calcularRota(tipo, origem, destino) {
        if (tipo === "carro") {
            console.log(`Calculando rota para carro de origem ${origem} para destino ${destino}`);
        } else if (tipo === "caminhao") {
            console.log(`Calculando rota para caminhão de origem ${origem} para destino ${destino}`);
        } else if (tipo === "bicicleta") {
            console.log(`Calculando rota para bicicleta de origem ${origem} para destino ${destino}`);
        } else {
            console.log(`Tipo de transporte não suportado: ${tipo}`);
        }
    }
}

const navegador = new Navegador();
navegador.calcularRota("carro", "São Paulo", "Rio de Janeiro");
navegador.calcularRota("caminhao", "São Paulo", "Rio de Janeiro");
navegador.calcularRota("bicicleta", "São Paulo", "Rio de Janeiro");
navegador.calcularRota("aviao", "São Paulo", "Rio de Janeiro");