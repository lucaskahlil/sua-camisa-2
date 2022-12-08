import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty()
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty()
  products: string[];
}
