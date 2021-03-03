const orderEvents = require('../constants/orderEvents');
var bus = require('../services/eventBus');

class OrderWorker {
    constructor() {

        this.ordersInMaking = [];

        bus.on(orderEvents.NEW_ORDER_EVENT, (order) => {
            this.ordersInMaking.push({
                id: order.id,
                count: order.pizzas.length,
                orderName: order.name,
                pizzasReady: 0,
                startDate: order.date
            });

            console.time(order.id);
            console.log(`Order ${order.id} ==> new order received! ==> for ${order.name} on ${order.date}`);
        });

        bus.on(orderEvents.PIZZA_READY_EVENT, (order) => {
            //console.log(`Order ${order.id} ==> pizza is ready! [${order.pizza.name}]`);
            let orderInMaking = this.ordersInMaking.find(o => o.id == order.id);
            orderInMaking.pizzasReady++;
            if (orderInMaking.count == orderInMaking.pizzasReady) {
                bus.emit(orderEvents.ORDER_READY_EVENT, orderInMaking);

            }
        });

        bus.on(orderEvents.ORDER_READY_EVENT, (order) => {
            this.ordersInMaking = this.ordersInMaking.filter(o => o.id != order.id);
            console.log(`Order ${order.id} ==> was delivered!`);
            console.timeEnd(order.id);
        });
    }

    newOrder(order) {
        bus.emit(orderEvents.NEW_ORDER_EVENT, order);
    }
}

module.exports = new OrderWorker();