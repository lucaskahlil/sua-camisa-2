import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  senha: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsUrl()
  @ApiProperty()
  imagem: string;
}
