import { Module } from '@nestjs/common';
import { ModelService } from './services/model/model.service';
import { ModelController } from './controller/model/model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './entity/model-entity';
import { ModelEnEntity } from './entity/model-entity-en';

@Module({
  imports: [TypeOrmModule.forFeature([ModelEntity]),TypeOrmModule.forFeature([ModelEnEntity])],
  providers: [ModelService],
  controllers: [ModelController]
})
export class ModelModule {}
