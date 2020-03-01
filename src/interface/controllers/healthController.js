
const database = require('../../infrastructure/databases/database');

const healthController = {
    async getHealth(_, res) {
        const isConnected = await database.isConnected();
        const dbConnection = isConnected ? 'on' : 'off';
        const status = isConnected ? 200 : 500;

        res.status(status).json({
            date_time: new Date(),
            db_connection: dbConnection,
        });
    },
};

module.exports = healthController;
