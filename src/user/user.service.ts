import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handle.error.util';

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

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.senha != createUserDto.confirmarSenha) {
      throw new BadRequestException('As senhas informadas não são iguais');
    }

    delete createUserDto.confirmarSenha;

    const user: User = {
      ...createUserDto,
      senha: await bcrypt.hash(createUserDto.senha, 10),
    };
    return this.prisma.user
      .create({
        data: user,
      })
      .catch(handleError);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id: id } });

    if (updateUserDto.senha) {
      if (updateUserDto.senha != updateUserDto.confirmarSenha) {
        throw new BadRequestException('As senhas informadas não são iguais');
      }
    }

    delete updateUserDto.confirmarSenha;

    if (!record) {
      throw new NotFoundException(`Registro com o ID ${id} não encontrado.`);
    }

    const data: Partial<User> = { ...updateUserDto };

    if (data.senha) {
      data.senha = await bcrypt.hash(data.senha, 10);
    }

    return this.prisma.user
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
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
}
