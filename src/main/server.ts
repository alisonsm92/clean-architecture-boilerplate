import dotenv from 'dotenv';
import environment from 'environment';
import setupApp from 'main/config/app';
import logger from 'main/config/logger';

const startServer = async () => {
  dotenv.config();
  try {
    const app = await setupApp();
    app.listen(environment.server.port);
    logger.info(`${environment.server.name} is listening on port ${environment.server.port}`);
  } catch (err) {
    process.exitCode = 1;
    logger.error(err);
  }
};

startServer();
