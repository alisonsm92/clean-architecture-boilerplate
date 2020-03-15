/**
 * Returns connection status
 * @returns {Promise<string>}
 */
const getConnectionStatus = async () => {
    try {
        // Test database connection
        return 'on';
    // eslint-disable-next-line no-unreachable
    } catch (e) {
        return 'off';
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
    initialize, getConnectionStatus,
};
