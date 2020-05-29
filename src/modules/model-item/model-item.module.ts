import { Module } from '@nestjs/common';
import { ModelItemController } from './controller/model-item/model-item.controller';
import { ModelItemService } from './services/model-item/model-item.service';
import { ModelItemEntity } from './entity/model-item-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ModelItemEntity])],
  controllers: [ModelItemController],
  providers: [ModelItemService]
})
export class ModelItemModule {}
