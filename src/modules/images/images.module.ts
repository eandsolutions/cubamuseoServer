import { Module } from '@nestjs/common';
import { ImagesService } from './services/images/images.service';
import { ImagesController } from './controller/images/images.controller';

@Module({
  providers: [ImagesService],
  controllers: [ImagesController]
})
export class ImagesModule {}
