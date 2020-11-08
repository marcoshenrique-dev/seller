import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';

import CreateBookService from '../services/CreateBookService';

const BooksRouter = Router();

BooksRouter.get('/', async (request, response) => {
   const booksRepository = getCustomRepository(BooksRepository);
   const books = await booksRepository.find();
   response.json(books);
});

BooksRouter.post('/', async (request, response) => {
   try {
      const { name, price, description } = request.body;

      const createBook = new CreateBookService();

      const book = await createBook.execute({ name, price, description });

      return response.status(200).json(book);
   } catch (err) {
      return response.status(400).send({
         message: err.message,
      });
   }
});

export default BooksRouter;
