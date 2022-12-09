import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto): Promise<LoginResponseDto> {
    throw new Error('Method not implemented.');
  }
}
