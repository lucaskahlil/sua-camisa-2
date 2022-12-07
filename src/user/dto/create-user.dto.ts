import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  @MinLength(8)
  senha: string;

  @ApiProperty()
  confirmarSenha: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsUrl()
  @ApiProperty()
  imagem: string;
}
