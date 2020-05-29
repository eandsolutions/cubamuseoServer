import { Test, TestingModule } from '@nestjs/testing';
import { CategoryItemController } from './category-item.controller';

describe('CategoryItem Controller', () => {
  let controller: CategoryItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryItemController],
    }).compile();

    controller = module.get<CategoryItemController>(CategoryItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
