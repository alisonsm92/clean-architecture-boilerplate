const express = require('express');
const logger = require('express-pino-logger');
const router = require('../interface/http/router');

const initialize = () => {
    const app = express();

    app.use(logger());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(router);

    return app;
};

module.exports = { initialize };
