import { Module } from '@nestjs/common';
import { PostalService } from './services/postal/postal.service';
import { PostalController } from './controller/postal/postal.controller';
import { PostalEntity } from './entity/postal-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostalEntity])],
  providers: [PostalService],
  controllers: [PostalController]
})
export class PostalModule {}
