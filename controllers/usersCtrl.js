const logger = require('../logger')

const controller = {

    getAllUsers: (req, res) => {
        res.status(200).send([])
    },

    getUserbyId: (req, res) => {
        const userId = req.params.userId
        logger.info(userId)
        res.status(200).send({})
    }
}

module.exports = controller;