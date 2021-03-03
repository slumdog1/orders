const orderEvents = require('../constants/orderEvents');
var bus = require('../services/eventBus');
const WorkerBase = require('./workerBase');
const { fakeTask } = require('../utilities/utilities');

class OvenWorker extends WorkerBase {
    constructor(ovenAmount) {
        super(ovenAmount);
        bus.on(orderEvents.PIZZA_TOPPING_READY_EVENT, (order) => {
            this.q.push(order);
        });
    }

    async doWork(order) {
        console.log(`Order ${order.id} ==> pizza in the oven! for ==> ${order.pizza.name}`);
        await fakeTask(1);
        bus.emit(orderEvents.PIZZA_OVEN_READY_EVENT, order);
    }
}

module.exports = OvenWorker;