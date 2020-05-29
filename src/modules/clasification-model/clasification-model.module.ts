import { Module } from '@nestjs/common';
import { ClasificationModelController } from './controller/clasification-model/clasification-model.controller';
import { ClasificationModelService } from './services/clasification-model/clasification-model.service';
import { ClasificationModelEntity } from './entity/clasification-model-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClasificationModelEntity])],
  controllers: [ClasificationModelController],
  providers: [ClasificationModelService]
})
export class ClasificationModelModule {}
