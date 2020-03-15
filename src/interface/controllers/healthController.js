const database = require('../../infrastructure/databases/database');

const healthController = {
    async getHealth() {
        const isConnected = await database.isConnected();
        const dbConnection = isConnected ? 'on' : 'off';

        const statusCode = isConnected ? 200 : 500;
        const body = {
            date_time: new Date(),
            db_connection: dbConnection,
        };

        return { body, statusCode };
    },
};

module.exports = healthController;
