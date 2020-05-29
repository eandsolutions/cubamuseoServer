import { Module } from '@nestjs/common';
import { ItemController } from './controller/item/item.controller';
import { ItemService } from './services/item/item.service';
import { ItemEntity } from './entity/item-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
