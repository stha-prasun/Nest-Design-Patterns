import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmUserRepository } from './repositories/typeorm-user.repository';
import { USER_REPOSITORY } from './constants/user.constants';

@Module({
  imports: [TypeOrmModule.forFeature([User])],

  controllers: [UsersController],

  providers: [UsersService, TypeOrmUserRepository, {
      provide: USER_REPOSITORY,
      useExisting: TypeOrmUserRepository,
    },],

  exports: [UsersService, USER_REPOSITORY],
})
export class UsersModule {}
