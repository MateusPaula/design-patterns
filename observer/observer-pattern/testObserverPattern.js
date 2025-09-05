const Cliente = require("./models/ConcreteObserver");
const Loja = require("./models/ConcreteSubject");

const clienteA = new Cliente('Cliente A');
const clienteB = new Cliente('Cliente B');
const clienteC = new Cliente('Cliente C');

const loja = new Loja();

loja.adicionarObservers(clienteA);
loja.adicionarObservers(clienteB);
loja.adicionarObservers(clienteC);

loja.removerObservers(clienteB);

loja.receberNovoProduto()
