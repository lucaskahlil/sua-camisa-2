import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty() //para mostrar no swagger o schema do dto
  tamanho: string;

  @IsString()
  @ApiProperty()
  modelo: string;
}
