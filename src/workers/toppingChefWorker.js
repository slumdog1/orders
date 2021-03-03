const orderEvents = require('../constants/orderEvents');
var bus = require('../services/eventBus');
const WorkerBase = require('./workerBase');
const { fakeTask } = require('../utilities/utilities');

class ToppingChefWorker extends WorkerBase {
    constructor(workerAmount) {
        super(workerAmount);

        bus.on(orderEvents.PIZZA_DOUGH_READY_EVENT, (order) => {
            this.q.push(order);
        });
    }

    async doWork(order) {
        console.log(`Order ${order.id} ==> spreading toppings! for ==> ${order.pizza.name}`);
        await fakeTask(4);
        bus.emit(orderEvents.PIZZA_TOPPING_READY_EVENT, order);
    }
}

module.exports = ToppingChefWorker;