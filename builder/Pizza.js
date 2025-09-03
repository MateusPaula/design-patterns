class Pizza {
    constructor(size, crust, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.creese = cheese || false;
        this.toppings = toppings || []
    }
}

module.exports = Pizza