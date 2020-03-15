/**
 * Returns connection status
 * @returns {Promise<boolean>}
 */
const isConnected = async () => {
    try {
        // Test database connection
        return true;
    // eslint-disable-next-line no-unreachable
    } catch (e) {
        return false;
    }
};

/**
 * Initialize Database connection
 * @returns {Promise<*>}
 */
const initialize = async () => {
    // connection configuration
    // event listeners
};

module.exports = {
    initialize, isConnected,
};
