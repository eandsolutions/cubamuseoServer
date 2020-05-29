import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SectionController } from './controller/section/section.controller';
import { SectionService } from './services/section/section.service';
import { SectionEntity } from './entity/section-entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity])],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule {}
