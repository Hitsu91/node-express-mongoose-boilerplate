import express from 'express';
import config from './config/config';
import { initDatabase } from './config/database';
import defineLogger from './config/logging';
import loggingMiddleWare from './middlewares/logging_middleware';
import notFoundMiddleWare from './middlewares/not_found_middleware';
import serverRuleMiddleWare from './middlewares/server_rules_middleware';
import booksRoute from './routes/book';

/** Database Connection */
initDatabase();

/** Basic Settings */
const NAMESPACE = 'Server';
const app = express();
const logger = defineLogger(NAMESPACE);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** LOGGER */
app.use(loggingMiddleWare);

/** Server Rules */
app.use(serverRuleMiddleWare);

/** API Routes */
app.use('/books', booksRoute);

/** 404 */
app.use(notFoundMiddleWare);

/** Run Server */
app.listen(config.server.port, () =>
  logger.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  )
);
