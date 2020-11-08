import { getRepository } from 'typeorm';
import Book from '../models/Books';

interface Request {
   book_id: string;
   price: number;
}

class UpdateBookPriceService {
   public async execute({ book_id, price }: Request): Promise<Book> {
      const bookRepository = getRepository(Book);
      const book = await bookRepository.findOne(book_id);

      if (!book) {
         throw Error('Book not found');
      }

      if (price === 0) {
         throw Error('price cannot be less than or equal to 0');
      }

      book.price = price;
      await bookRepository.save(book);

      console.log(book);
      return book;
   }
}

export default UpdateBookPriceService;
