import { Module } from '@nestjs/common';
import { TextController } from './controller/text/text.controller';
import { TextService } from './services/text/text.service';
import { TextEntity } from './entity/text-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextEnEntity } from './entity/text-en-entity';

@Module({
  imports: [TypeOrmModule.forFeature([TextEntity]),TypeOrmModule.forFeature([TextEnEntity])],
  controllers: [TextController],
  providers: [TextService]
})
export class TextModule {}
