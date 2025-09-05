const Navegador = require("./models/Navegador");
const RotaCarro = require("./models/RotaCarro");
const RotaCaminhao = require("./models/RotaCaminhao");
const RotaBicicleta = require("./models/RotaBicicleta");

const navegador = new Navegador();
navegador.setEstrategia(new RotaCarro());
navegador.calcularRota("São Paulo", "Rio de Janeiro");

navegador.setEstrategia(new RotaCaminhao());
navegador.calcularRota("São Paulo", "Rio de Janeiro");

navegador.setEstrategia(new RotaBicicleta());
navegador.calcularRota("São Paulo", "Rio de Janeiro");
