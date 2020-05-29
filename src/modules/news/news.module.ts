import { Module } from '@nestjs/common';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './services/news/news.service';
import { NewsEntity } from './entity/news-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
