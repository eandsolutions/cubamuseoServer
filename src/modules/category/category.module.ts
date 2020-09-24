import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './services/category/category.service';
import { CategoryController } from './controller/category/category.controller';
import { CategoryEntity } from './entity/category-entity';
import { CategoryEnEntity } from './entity/category-en-entity'

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]),TypeOrmModule.forFeature([CategoryEnEntity])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
