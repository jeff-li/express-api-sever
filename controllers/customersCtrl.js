const logger = require('../logger')
const db = require('../models/index');

const Customer = db.Customer;

const controller = {

    getAllCustomers: async (req, res) => {
      const result = await Customer.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email']
      })
      return res.status(200).json(result)
    },

    getCustomerById: async (req, res) => {
      const result = await Customer.findByPk(req.params.customerId)
      logger.info(result.toJSON())
      return res.status(200).json(result)
    }
}

module.exports = controller;
