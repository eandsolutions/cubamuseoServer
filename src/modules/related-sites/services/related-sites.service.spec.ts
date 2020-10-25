import { RelatedSitesService } from './related-sites.service';
import { Test, TestingModule } from '@nestjs/testing';


describe('RelatedSitesService', () => {
  let service: RelatedSitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelatedSitesService],
    }).compile();

    service = module.get<RelatedSitesService>(RelatedSitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
