const expressLoader = require('./expressLoader');
const databaseLoader = require('./databaseLoader');

/**
 * Initialize application and all required dependencies
 */
const initializeApplication = async () => {
    await databaseLoader.initialize();
    const app = expressLoader.initialize();

    return app;
};

module.exports = { initializeApplication };
