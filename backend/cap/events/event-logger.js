const logger = require("../logs/logger");

/**
 * Logs every event to the system logs
 */
class EventLogger {
    static log(eventType, payload) {
        logger.info(`[EVENT] ${eventType}`, payload);
    }
}

module.exports = EventLogger; 
