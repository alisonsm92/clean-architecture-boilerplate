import express from 'express';
import logger from './logger';
import setupGenericDatabase from './database';
import setupExpress from './express';

/**
 * Setup application and all required dependencies
 */
const setupApp = async () :Promise<express.Application> => {
  await setupGenericDatabase();
  logger.info('Database connected');
  return setupExpress();
};

export default setupApp;
