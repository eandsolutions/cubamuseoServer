import { Test, TestingModule } from '@nestjs/testing';
import { SectionCategoryService } from './section-category.service';

describe('SectionCategoryService', () => {
  let service: SectionCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionCategoryService],
    }).compile();

    service = module.get<SectionCategoryService>(SectionCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
