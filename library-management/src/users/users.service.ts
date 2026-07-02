import { Injectable } from '@nestjs/common';

import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
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
