import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  nascimento: Date;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  endereco: string;
}
