const PizzaBuilder = require('./PizzaBuilder');
const PizzaDirector = require('./PizzaDirector');

const builder = new PizzaBuilder();
const director = new PizzaDirector(builder);

const margherita = director.makeMargherita();

console.log(margherita);

const pepperoni = director.makePepperoni();

console.log(pepperoni);