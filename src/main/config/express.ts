import express from 'express';
import logger from 'express-pino-logger';
import router from 'main/http/router';

const setupExpress = () :express.Application => {
  const app = express();
  app.use(logger());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(router);
  return app;
};

export default setupExpress;
