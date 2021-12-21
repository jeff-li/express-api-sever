const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const logger = require('../logger');

const publicRouter = require('./public')
const adminRouter = require('./admin')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const auth = require('../middlewares/auth')


// Swagger set up
// By default the Swagger Explorer bar is hidden, to display it pass true 
// as the 'explorer' property of the options to the setup function
const options = {
  explorer: true
};
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, options));

// Routes
// Public
router.use('/', publicRouter)

// Authentication Middleware
router.use(auth.hasToken)
router.use('/admin', adminRouter);

// Error Handler
router.use((err, req, res, next) => {
    logger.error(err)
    res.status(err.status).send(err.message)
})

module.exports = router;
