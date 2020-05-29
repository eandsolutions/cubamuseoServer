import { Module } from '@nestjs/common';
import { SectionCategoryService } from './services/section-category/section-category.service';
import { SectionCategoryController } from './controller/section-category/section-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionCategoryEntity } from './entity/section-category-entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectionCategoryEntity])],
  providers: [SectionCategoryService],
  controllers: [SectionCategoryController]
})
export class SectionCategoryModule {}
