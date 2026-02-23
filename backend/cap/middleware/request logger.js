const logger = require("../logs/logger");

/**
 * Logs incoming requests
 */
module.exports = (req, res, next) => {
    logger.info(`Request: ${req.method} ${req.originalUrl}`, req.body);
    next();
};
