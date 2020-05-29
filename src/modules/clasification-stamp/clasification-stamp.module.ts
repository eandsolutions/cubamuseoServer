import { Module } from '@nestjs/common';
import { ClasificationStampService } from './services/clasification-stamp/clasification-stamp.service';
import { ClasificationStampController } from './controller/clasification-stamp/clasification-stamp.controller';
import { ClasificationStampEntity } from './entity/clasification-stamp-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClasificationStampEntity])],
  providers: [ClasificationStampService],
  controllers: [ClasificationStampController]
})
export class ClasificationStampModule {}
