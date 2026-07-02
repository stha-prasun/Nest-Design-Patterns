import { Inject, Injectable } from '@nestjs/common';

import { USER_REPOSITORY } from './constants/user.constants';
import { User } from './entities/user.entity';
import type { IUserRepository } from './interfaces/user-repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  create(user: Partial<User>) {
    return this.userRepository.create(user);
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  findById(id: string) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
