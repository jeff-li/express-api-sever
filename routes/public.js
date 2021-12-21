const express = require('express');
const router = express.Router();
const logger = require('../logger');

// middleware that is specific to this router
router.use((req, res, next) => {
  logger.debug('Inside public routes.');
  next();
});

router.get('/', function (req, res, next) {
  return res.status(200).send('Hello world!');
});

module.exports = router;
