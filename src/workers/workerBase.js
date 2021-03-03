var async = require("async");

class WorkerBase {
    constructor(concurrency) {
        console.log(`BASE ==> ctor ==> ${this.constructor.name}`);
        this._initQueue(concurrency);
    }

    async doWork() {
        throw Error("METHOD NOT IMPLEMENTED!");
    };

    _initQueue(concurrency) {
        var _this = this;
        this.q = async.queue(async function (order, callback) {
            await _this.doWork(order);
            callback();
        }, concurrency);
    }
}

module.exports = WorkerBase;