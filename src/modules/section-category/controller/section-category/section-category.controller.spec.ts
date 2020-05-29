import { Test, TestingModule } from '@nestjs/testing';
import { SectionCategoryController } from './section-category.controller';

describe('SectionCategory Controller', () => {
  let controller: SectionCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionCategoryController],
    }).compile();

    controller = module.get<SectionCategoryController>(SectionCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
