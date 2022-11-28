import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
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

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product = { ...createProductDto };
    return this.prisma.product.create({
      data: product,
    });
  }

  update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const data: Partial<Product> = { ...updateProductDto };
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.product.delete({
      where: { id },
    });
  }
}
