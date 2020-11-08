import { getRepository } from 'typeorm';
import Book from '../models/Books';

interface Request {
   book_id: string;
   name: string;
}

class UpdateBookNameService {
   public async execute({ book_id, name }: Request): Promise<Book> {
      const bookRepository = getRepository(Book);
      const book = await bookRepository.findOne(book_id);

      if (!book) {
         throw Error('Book not found');
      }

      if (name === '') {
         throw Error('Name not found');
      }

      book.name = name;
      await bookRepository.save(book);

      console.log(book);
      return book;
   }
}

export default UpdateBookNameService;
