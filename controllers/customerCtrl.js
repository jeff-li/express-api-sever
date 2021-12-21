const logger = require('../logger');
const db = require('../models/index');

const Customer = db.Customer;

const controller = {
  getAllCustomers: async (req, res) => {
    logger.info('Getting all customers.');
    const result = await Customer.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email'],
    });
    return res.status(200).json(result);
  },

  getCustomerById: async (req, res) => {
    const result = await Customer.findByPk(req.params.customerId);
    return res.status(200).json(result);
  },
};

module.exports = controller;
