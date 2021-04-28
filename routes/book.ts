import { Router } from 'express';
import { addBook, getAllBooks } from '../controller/book';

const route = Router();

route.get('/', getAllBooks);
route.post('/', addBook);

export default route;
