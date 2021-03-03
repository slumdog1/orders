const Order = require('../model/order')
const Pizza = require('../model/pizza')

const build = (orderRequest) => {
    let pizzas = [];
    orderRequest.pizzas.forEach(pizza => {
        pizzas.push(new Pizza(pizza.toppings, pizza.name));
    });

    return new Order(pizzas, orderRequest.name);
}

module.exports = { build }