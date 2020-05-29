import { Module } from '@nestjs/common';
import { ShopTematicsController } from './controller/shop-tematics/shop-tematics.controller';
import { ShopTematicsService } from './services/shop-tematics/shop-tematics.service';
import { ShopTematicsEntity } from './entity/shop-tematics-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShopTematicsEntity])],
  controllers: [ShopTematicsController],
  providers: [ShopTematicsService]
})
export class ShopTematicsModule {}
