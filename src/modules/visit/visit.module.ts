import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitController } from './controller/visit.controller';
import { VisitEntity } from './entity/visit-entity';
import { VisitService } from './service/visit.service';


@Module({
  imports: [TypeOrmModule.forFeature([VisitEntity])],
  controllers: [VisitController],
  providers: [VisitService]
})
export class VisitModule {}
