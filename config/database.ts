import mongoose from 'mongoose';
import config from '../config/config';
import defineLogger from '../config/logging';
const NAMESPACE = 'DatabaseInit';
const logger = defineLogger(NAMESPACE);

const initDatabase = () =>
  mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((_) => logger.info('Connected to Mongo'))
    .catch((error) => logger.error(error.message, error));

export { initDatabase };
