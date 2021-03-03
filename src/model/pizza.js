class Pizza {
    constructor(toppings, name) {
        this.name = name;
        this.toppings = toppings || [];
    }
}

module.exports = Pizza;