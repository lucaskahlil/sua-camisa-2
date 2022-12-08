import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty()
  userId: string;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  @ApiProperty({
    type: [CreateOrderProductDto],
  })
  products: CreateOrderProductDto[];
}
