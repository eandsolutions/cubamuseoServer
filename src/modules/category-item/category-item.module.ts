import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryItemService } from './services/category-item/category-item.service';
import { CategoryItemController } from './constroller/category-item/category-item.controller';
import { CategoryItemEntity } from './entity/category-item-entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryItemEntity])],
  providers: [CategoryItemService],
  controllers: [CategoryItemController]
})
export class CategoryItemModule {}
