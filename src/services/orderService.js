const { StatusCodes } = require('http-status-codes');
const orderWorker = require('../workers/orderWorker');
const { build } = require('../builders/orderBuilder');

class OrderService {

    async newOrder(req, res) {
        try {
            var orderFromRequest = req.body.order;
            const order = build(orderFromRequest);
            orderWorker.newOrder(order);
            res.sendStatus(StatusCodes.CREATED);
        } catch (error) {
            console.error("error occur while processing new pizza order");
            res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = new OrderService();