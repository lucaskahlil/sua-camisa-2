import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty() //para mostrar no swagger o schema do dto
  tamanho: string;

  @ApiProperty()
  modelo: string;
}
