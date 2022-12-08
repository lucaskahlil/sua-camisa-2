import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty()
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  quantity: number;

  @IsString()
  @ApiProperty()
  description: string;
}
