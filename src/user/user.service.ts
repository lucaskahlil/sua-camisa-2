import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {} // readonly para nao modificar o prisma.

  // Retornando uma promisse com pista de produtos
  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id: id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID ${id} não encontrado.`);
    }
    return record;
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = { ...createUserDto };
    return this.prisma.user
      .create({
        data: user,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id: id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID ${id} não encontrado.`);
    }

    const data: Partial<User> = { ...updateUserDto };
    return this.prisma.user
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }

  async delete(id: string) {
    const record = await this.prisma.user.findUnique({ where: { id: id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID ${id} não encontrado.`);
    }

    await this.prisma.user.delete({
      where: { id },
    });
  }

  handleError(error: Error) {
    console.log(error.message);
    return undefined;
  }
}
