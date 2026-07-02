import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { BookFactory } from './factories/book.factory';
import { TypeOrmBookRepository } from './repositories/typeorm-book.repository';
import { BOOK_REPOSITORY } from './constants/book.constants';
import { BooksController } from './books.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AuthModule],

  providers: [
    BooksService,

    BookFactory,

    TypeOrmBookRepository,

    {
      provide: BOOK_REPOSITORY,
      useExisting: TypeOrmBookRepository,
    },
  ],

  controllers: [BooksController],
})
export class BooksModule {}
