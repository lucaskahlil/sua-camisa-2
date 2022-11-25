import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {} // readonly para nao modificar o prisma.

  // Retornando uma promisse com pista de produtos
  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
  findOne(id: string): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id: id } });
  }

  create(createProductDto: CreateProductDto) {
    const product: Product = { ...createProductDto };
    this.prisma.product.create({
      data: product,
    });
  }
  update() {
    throw new Error('Method not implemented.');
  }
  remove() {
    throw new Error('Method not implemented.');
  }
}
