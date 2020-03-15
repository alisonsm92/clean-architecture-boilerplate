const database = require('../infrastructure/databases/database');
const { isAppHealthy } = require('../domain/appHealth');

const getAppHealth = async () => {
    const dbConnectionStatus = await database.getConnectionStatus();
    const isHealthy = isAppHealthy(dbConnectionStatus);
    const dateTime = new Date();

    return { isHealthy, dbConnectionStatus, dateTime };
};

module.exports = getAppHealth;
