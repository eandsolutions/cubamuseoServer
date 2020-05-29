import { Module } from '@nestjs/common';
import { ShopItemService } from './services/shop-item/shop-item.service';
import { ShopItemController } from './controller/shop-item/shop-item.controller';
import { ShopItemEntity } from './entity/shop-item-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShopItemEntity])],
  providers: [ShopItemService],
  controllers: [ShopItemController]
})
export class ShopItemModule {}
