import { Test, TestingModule } from '@nestjs/testing';
import { RelatedSitesController } from './related-sites.controller';

describe('News Controller', () => {
  let controller: RelatedSitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelatedSitesController],
    }).compile();

    controller = module.get<RelatedSitesController>(RelatedSitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
