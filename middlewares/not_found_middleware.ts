import { Request, Response } from 'express';

const notFoundMiddleWare = (_: Request, res: Response) => {
  res.status(404).json({
    error: 'resource not found',
  });
};

export default notFoundMiddleWare;
