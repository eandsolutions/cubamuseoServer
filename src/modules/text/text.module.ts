import { Module } from '@nestjs/common';
import { TextController } from './controller/text/text.controller';
import { TextService } from './services/text/text.service';
import { TextEntity } from './entity/text-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TextEntity])],
  controllers: [TextController],
  providers: [TextService]
})
export class TextModule {}
