import { Module } from '@nestjs/common';
import { CategoryStampService } from './services/category-stamp/category-stamp.service';
import { CategoryStampController } from './controller/category-stamp/category-stamp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryStampEntity } from './entity/category-stamp-entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryStampEntity])],
  providers: [CategoryStampService],
  controllers: [CategoryStampController]
})
export class CategoryStampModule {}
