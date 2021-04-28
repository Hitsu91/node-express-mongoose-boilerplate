import { NextFunction, Request, Response } from 'express';
import IBook from '../interfaces/book';
import Book from '../model/book';

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await Book.find();
    return res.send(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};

const addBook = async (req: Request, res: Response) => {
  try {
    const newBook = req.body as IBook;
    const createdBook = await Book.create(newBook);
    res.status(201).send(createdBook);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};

export { getAllBooks, addBook };
