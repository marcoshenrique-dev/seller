import { EntityRepository, Repository } from 'typeorm';

import Books from '../models/Books';

@EntityRepository(Books)
class BooksRepository extends Repository<Books> {}

export default BooksRepository;
