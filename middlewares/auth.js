const logger = require('../logger');

const authMiddleware = {

    hasToken: (req, res, next) => {
        logger.info('checking auth status')
        return true;
    }

};

module.exports = authMiddleware;