import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty()
  modelo: string;

  @IsString()
  @ApiProperty() //para mostrar no swagger o schema do dto
  tamanho: string;

  @IsString()
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  preco: number;

  @IsString()
  @ApiProperty()
  imagem: string;
}
