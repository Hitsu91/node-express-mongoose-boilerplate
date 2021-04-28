import { NextFunction, Request, Response } from 'express';
import defineLogger from '../config/logging';
const NAMESPACE = 'LOGGING_MIDDLEWARE';
const logger = defineLogger(NAMESPACE);

const loggingMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  /** Log the req */
  logger.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on('finish', () => {
    /** Log the res */
    logger.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
};

export default loggingMiddleWare;
