import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Book } from '../entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';

@Injectable()
export class BookFactory {
  create(dto: CreateBookDto): Book {
    const book = new Book();

    book.title = dto.title;
    book.author = dto.author;
    book.category = dto.category;

    book.stock = dto.stock;

    book.available = dto.stock;

    book.isbn = randomUUID();

    book.slug = this.generateSlug(dto.title);

    return book;
  }

  private generateSlug(title: string): string {
    return title.toLowerCase().trim().replace(/\s+/g, '-');
  }
}
