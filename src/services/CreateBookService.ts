import { getCustomRepository } from 'typeorm';
import Books from '../models/Books';
import BooksRepository from '../repositories/BooksRepository';

interface Request {
   name: string;
   price: number;
   description: string;
}

class CreateBookService {
   public async execute({ name, price, description }: Request): Promise<Books> {
      const booksRepository = getCustomRepository(BooksRepository);

      if (price <= 0) {
         throw Error('price cannot be less than or equal to 0');
      }

      if (name === '') {
         throw Error('Name is not defined');
      }

      const book = booksRepository.create({
         name,
         price,
         description,
      });

      await booksRepository.save(book);

      return book;
   }
}

export default CreateBookService;
