import { Module } from '@nestjs/common';
import { RelatedSitesController} from './controller/related-sites.controller';
import { RelatedSitesService } from './services/related-sites.service';
import { RelatedSitesEntity } from './entity/related-sites-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RelatedSitesEntity])],
  controllers: [RelatedSitesController],
  providers: [RelatedSitesService]
})
export class RelatedSitesModule {}
