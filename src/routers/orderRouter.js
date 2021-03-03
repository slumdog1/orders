var express = require('express');
var orderService = require('../services/orderService');
const router = express.Router();
router.use(express.json());
router.post('/', (req, res) => orderService.newOrder(req, res));
module.exports = router;