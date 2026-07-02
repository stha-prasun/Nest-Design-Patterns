import { Injectable } from '@nestjs/common';
import { IBookRepository } from '../interfaces/book-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';

@Injectable()
export class TypeOrmBookRepository implements IBookRepository {
  constructor(
    @InjectRepository(Book)
    private readonly repository: Repository<Book>,
  ) {}

  create(book: Book) {
    return this.repository.save(book);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: string) {
    return this.repository.findOne({
      where: { id },
    });
  }

  save(book: Book) {
    return this.repository.save(book);
  }
}
