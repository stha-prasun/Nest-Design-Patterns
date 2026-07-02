import { Book } from '../entities/book.entity';

export interface IBookRepository {
  create(book: Book): Promise<Book>;

  findAll(): Promise<Book[]>;

  findById(id: string): Promise<Book | null>;

  save(book: Book): Promise<Book>;
}
