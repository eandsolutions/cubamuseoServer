import { Module } from '@nestjs/common';
import { StampService } from './services/stamp/stamp.service';
import { StampController } from './controller/stamp/stamp.controller';
import { StampEntity } from './entity/stamp-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StampEntity])],
  providers: [StampService],
  controllers: [StampController]
})
export class StampModule {}
