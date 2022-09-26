import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getAll() {
    const users = this.userRepository.find();
    return users;
  }
}
