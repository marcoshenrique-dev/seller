import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';

import CreateBookService from '../services/CreateBookService';
import UpdateBookNameService from '../services/UpdateBookNameService';
import UpdateBookPriceService from '../services/UpdateBookPriceService';

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

BooksRouter.patch('/name', async (request, response) => {
   try {
      const { name, id } = request.body;
      const updateBookNameService = new UpdateBookNameService();
      const book = await updateBookNameService.execute({
         book_id: id,
         name,
      });

      return response.json(book);
   } catch (err) {
      return response.status(400).json(err.message);
   }
});

BooksRouter.patch('/price', async (request, response) => {
   try {
      const { price, id } = request.body;
      const updateBookPriceService = new UpdateBookPriceService();
      const book = await updateBookPriceService.execute({
         book_id: id,
         price,
      });

      return response.json(book);
   } catch (err) {
      return response.status(400).json(err.message);
   }
});

export default BooksRouter;
