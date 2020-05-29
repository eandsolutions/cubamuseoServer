import { Test, TestingModule } from '@nestjs/testing';
import { CategoryPostalController } from './category-postal.controller';

describe('CategoryPostal Controller', () => {
  let controller: CategoryPostalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryPostalController],
    }).compile();

    controller = module.get<CategoryPostalController>(CategoryPostalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
