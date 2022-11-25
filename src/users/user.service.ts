import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  user: User[] = [];

  findAll() {
    return User;
  }
  findOne() {
    throw new Error('Method not implemented.');
  }
  create(@Body() createUserDto: CreateUserDto) {
    const user: User = { id: 'Random ID', ...createUserDto };
    this.user.push(user);
    return user;
  }
  update() {
    throw new Error('Method not implemented.');
  }
  remove() {
    throw new Error('Method not implemented.');
  }
}
