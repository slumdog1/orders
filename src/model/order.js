const { v4: uuidv4 } = require('uuid');

class Order {
    constructor(pizzas, name) {
        this.id = uuidv4();
        this.pizzas = pizzas;
        this.name = name;
        this.date = new Date()
    }
}

module.exports = Order;