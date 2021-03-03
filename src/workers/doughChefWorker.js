const orderEvents = require('../constants/orderEvents');
var bus = require('../services/eventBus');
const WorkerBase = require('./workerBase');
const { fakeTask } = require('../utilities/utilities');

class DoughChefWorker extends WorkerBase {
    constructor(workerAmount) {
        super(workerAmount);

        bus.on(orderEvents.NEW_ORDER_EVENT, (order) => {
            order.pizzas.forEach(pizza => {
                this.q.push({ id: order.id, pizza: pizza });
            });
        });
    }

    async doWork(order) {
        console.time(`${order.id}-${order.pizza.name}`)
        console.log(`Order ${order.id} ==> preparing dough! for ==> ${order.pizza.name}`);
        await fakeTask(7);
        bus.emit(orderEvents.PIZZA_DOUGH_READY_EVENT, order);
    }
}

module.exports = DoughChefWorker;