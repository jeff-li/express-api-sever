const logger = require('../logger');

const authMiddleware = {

    hasToken: (req, res, next) => {
        logger.info('checking auth status')

        //  Add your own logic here

        next()
    }

};

module.exports = authMiddleware;
