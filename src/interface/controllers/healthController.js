const getAppHealth = require('../../application/getAppHealth');

const healthController = {
    async getHealth() {
        const { isHealthy, dbConnectionStatus, dateTime } = await getAppHealth();

        const statusCode = isHealthy ? 200 : 500;
        const body = {
            date_time: dateTime,
            db_connection: dbConnectionStatus,
        };

        return { body, statusCode };
    },
};

module.exports = healthController;
