import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './../model/entity/model-entity';
import { ShopItemEntity } from './../shop-item/entity/shop-item-entity';
import { TextEntity } from './../text/entity/text-entity';
import { CategoryEntity } from './../category/entity/category-entity';
import { Module } from '@nestjs/common';
import { SearchService } from './service/search/search.service';
import { SearchController } from './controller/search/search.controller';
import { StampEntity } from '../stamp/entity/stamp-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      TextEntity,
      ShopItemEntity,
      ModelEntity,
      StampEntity]),
  ],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule { }
