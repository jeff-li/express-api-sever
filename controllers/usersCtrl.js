const logger = require('../logger')

const controller = {

    getAllUsers: (req, res) => {
      return res.status(200).json([])
    },

    getUserbyId: (req, res) => {
      const userId = req.params.userId
      logger.info(userId)
      return res.status(200).json({})
    }
}

module.exports = controller;
