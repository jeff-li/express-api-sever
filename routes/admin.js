const express = require('express');
const router = express.Router();
const logger = require('../logger');

const customerCtrl = require('../controllers/customersCtrl')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    logger.info('Entering Admin endpoints');
    next()
})

router.get('/customers', customerCtrl.getAllCustomers)
router.get('/customers/:customerId', customerCtrl.getCustomerById)

module.exports = router
