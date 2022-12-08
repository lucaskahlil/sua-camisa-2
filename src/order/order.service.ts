import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle.error.util';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrderDto: CreateOrderDto) {
    const data: Prisma.orderCreateInput = {
      user: {
        connect: {
          id: createOrderDto.userId,
        },
      },
      products: {
        connect: createOrderDto.products.map((productID) => ({
          id: productID,
        })),
      },
    };

    this.prisma.order.create({ data }).catch(handleError);
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }
}
