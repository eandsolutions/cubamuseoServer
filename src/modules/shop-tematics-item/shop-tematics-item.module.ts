import { Module } from '@nestjs/common';
import { ShopTematicsItemService } from './services/shop-tematics-item/shop-tematics-item.service';
import { ShopTematicsItemController } from './controller/shop-tematics-item/shop-tematics-item.controller';
import { ShopTematicsItemEntity } from './entity/shop-tematics-item-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShopTematicsItemEntity])],
  providers: [ShopTematicsItemService],
  controllers: [ShopTematicsItemController]
})
export class ShopTematicsItemModule {}
