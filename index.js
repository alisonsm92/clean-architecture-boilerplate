require('dotenv').config();
const logger = require('pino')();
const { initializeApplication } = require('./src/loaders');
const config = require('./config');

const main = async () => {
    try {
        const app = await initializeApplication();

        app.listen(config.server.port);

        logger.info(`${config.server.name} is listening on port ${config.server.port}`);
    } catch (err) {
        process.exitCode = 1;
        logger.error(err);
    }
};

module.exports = main();
