var express = require('express');
var bodyParser = require('body-parser');
const expressApp = express();
const orderRouter = require('./routers/orderRouter');
const DoughChefWorker = new (require('./workers/doughChefWorker'))(2);
const ToppingChefWorker = new (require('./workers/toppingChefWorker'))(6);
const OvenWorker = new (require('./workers/ovenWorker'))(1);
const WaitersWorker = new (require('./workers/waitersWorker'))(2);

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
    extended: false
}));

const PORT = 3000;

expressApp.use('/api/v1/order', orderRouter);
expressApp.listen(PORT, () => {
    console.info(`Order Pizza Service - running on port ${PORT}`);
});
