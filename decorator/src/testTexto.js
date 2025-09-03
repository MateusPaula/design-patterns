const Texto = require('./Texto');
const NegritoDecorator = require('./NegritoDecorator');
const ItalicoDecorator = require('./ItalicoDecorator');
const SublinhadoDecorator = require('./SublinhadoDecorator');

const texto = new Texto('Olá, mundo!');
// const textoNegrito = new NegritoDecorator(texto);
// const textoItalico = new ItalicoDecorator(textoNegrito);
// const textoSublinhado = new SublinhadoDecorator(textoItalico);

console.log(texto);