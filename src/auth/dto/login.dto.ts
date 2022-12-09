import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nickname: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
