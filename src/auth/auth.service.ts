import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { email, senha } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('Usuário ou senha não encontrado');
    }

    const isHashValid = await bcrypt.compare(senha, user.senha);

    if (!isHashValid) {
      throw new NotFoundException('Usuário ou senha não encontrado');
    }

    delete user.senha;

    return {
      token: this.jwtService.sign({ email }),
      user: user,
    };
  }
}
