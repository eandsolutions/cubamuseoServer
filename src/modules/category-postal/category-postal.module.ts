import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategoryPostalService } from './services/category-postal/category-postal.service';
import { CategoryPostalController } from './controller/category-postal/category-postal.controller';
import { CategoryPostalEntity } from './entity/category-postal-entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryPostalEntity])],
  providers: [CategoryPostalService],
  controllers: [CategoryPostalController]
})
export class CategoryPostalModule {}
