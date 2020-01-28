const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
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


// Swagger set up
const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: ['./routes/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec, {
  explorer: true
}));

// Error Handler
router.use((err, req, res, next) => {
    logger.error(err)
    res.status(err.status).send(err.message)
})

module.exports = router;