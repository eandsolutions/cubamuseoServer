import { Module } from '@nestjs/common';
import { SendPostalController } from './controller/send-postal/send-postal.controller';
import { SendPostalService } from './services/send-postal/send-postal.service';
import { SendPostalEntity } from './entity/send-postal-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SendPostalEntity])],
  controllers: [SendPostalController],
  providers: [SendPostalService]
})
export class SendPostalModule {}
