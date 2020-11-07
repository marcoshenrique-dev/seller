import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';

const BooksRouter = Router();

BooksRouter.get('/', async (request, response) => {
   const booksRepository = getCustomRepository(BooksRepository);
   const books = await booksRepository.find();
   response.json(books);
});

export default BooksRouter;
