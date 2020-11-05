import { Body, Controller, Get, Param, Post, Delete } from "@nestjs/common";
import { Product } from "./product.entity";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController{
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.ProductService.findAll() 
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product>{
    return this.ProductService.findById(id)
  }

  @Post()
  async create(@Body() product: Product): Promise<Product>{
    return this.ProductService.create(product)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean>{
    return this.ProductService.remove(id)
  }
}