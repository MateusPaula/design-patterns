class PizzaDirector {
    constructor(builder) {
        this.builder = builder;
    }

    makeMargherita() {
        return this.builder.setSize('large')
        .setCrust('thin')
        .addCheese()
        .addTopping('mushrooms')
        .addTopping('olives')
        .addTopping('onions')
        .build();
    }

    makePepperoni() {
        return this.builder.setSize('large')
        .setCrust('thick')
        .addTopping('pepperoni')
        .addTopping('onions')
        .build();
    }
}

module.exports = PizzaDirector;