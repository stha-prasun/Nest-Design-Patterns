import { Inject, Injectable } from '@nestjs/common';
import { BookFactory } from './factories/book.factory';
import { BOOK_REPOSITORY } from './constants/book.constants';
import type { IBookRepository } from './interfaces/book-repository.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    private readonly bookFactory: BookFactory,

    @Inject(BOOK_REPOSITORY)
    private readonly repository: IBookRepository,
  ) {}

  create(dto: CreateBookDto) {
    const book = this.bookFactory.create(dto);

    return this.repository.create(book);
  }

  findAll() {
    return this.repository.findAll();
  }
}
