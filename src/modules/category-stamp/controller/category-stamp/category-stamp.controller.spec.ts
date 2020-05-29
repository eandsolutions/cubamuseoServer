import { Test, TestingModule } from '@nestjs/testing';
import { CategoryStampController } from './category-stamp.controller';

describe('CategoryStamp Controller', () => {
  let controller: CategoryStampController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryStampController],
    }).compile();

    controller = module.get<CategoryStampController>(CategoryStampController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
