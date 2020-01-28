const express = require('express');
const router = express.Router();
const logger = require('../logger');

const adminRouter = require('./admin')
// const auth = require('../middlewares/auth')

// Authentication Middleware
// router.use(auth.hasToken)

// Routes
router.get('/', function(req, res, next) {
  res.status(200).send('respond with a resource');
});

router.use('/admin', adminRouter);

// Error Handler
router.use((err, req, res, next) => {
    logger.error(err)
    res.status(err.status).send(err.message)
})

module.exports = router;