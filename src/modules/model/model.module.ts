import { Module } from '@nestjs/common';
import { ModelService } from './services/model/model.service';
import { ModelController } from './controller/model/model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './entity/model-entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModelEntity])],
  providers: [ModelService],
  controllers: [ModelController]
})
export class ModelModule {}
