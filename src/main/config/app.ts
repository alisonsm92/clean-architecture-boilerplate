import express from 'express';
import logger from './logger';
import setupGenericDatabase from './database';

/**
 * Setup application and all required dependencies
 */
const setupApp = async () :Promise<express.Application> => {
  await setupGenericDatabase();
  logger.info('Database connected');
  return (await import('main/config/express')).default;
};

export default setupApp;
