import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SectionController } from './controller/section/section.controller';
import { SectionService } from './services/section/section.service';
import { SectionEntity } from './entity/section-entity';
import { SectionEnEntity } from './entity/section-en-entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity]),TypeOrmModule.forFeature([SectionEnEntity])],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule {}
