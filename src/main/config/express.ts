import express from 'express';
import logger from 'express-pino-logger';
import router from 'main/http/router';

const app = express();
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export default app;
