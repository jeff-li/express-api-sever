const express = require('express');
const router = express.Router();
const logger = require('../logger');

const userCtrl = require('../controllers/usersCtrl')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    logger.info('Entering Admin endpoints');
    next()
})

/**
 * @swagger
 *
 * /admin/users:
 *   get:
 *     description: Get all users from the database
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
router.get('/users', userCtrl.getAllUsers)
router.get('/users/:userId', userCtrl.getUserbyId)


module.exports = router