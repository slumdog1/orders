const orderEvents = require('../constants/orderEvents');
var bus = require('../services/eventBus');
const WorkerBase = require('./workerBase');
const { fakeTask } = require('../utilities/utilities');

class WaitersWorker extends WorkerBase {
    constructor(workerAmount) {
        super(workerAmount);

        bus.on(orderEvents.PIZZA_OVEN_READY_EVENT, (order) => {

            this.q.push(order);
        });
    }

    async doWork(order) {
        console.log(`Order ${order.id} ==> pizza in delivery for ==> ${order.pizza.name}`);
        await fakeTask(2);
        console.timeEnd(`${order.id}-${order.pizza.name}`)
        bus.emit(orderEvents.PIZZA_READY_EVENT, order);
    }
}

module.exports = WaitersWorker;