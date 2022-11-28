import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create.product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os produtos',
  })
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Listar apenas um produto',
  })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um produto',
  })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put()
  @ApiOperation({
    summary: 'Atualizar um produto',
  })
  update() {
    return this.productService.update();
  }

  @Delete()
  @ApiOperation({
    summary: 'Excluir um produto',
  })
  remove() {
    return this.productService.remove();
  }
}
