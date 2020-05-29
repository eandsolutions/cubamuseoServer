import { Test, TestingModule } from '@nestjs/testing';
import { ModelItemController } from './model-item.controller';

describe('ModelItem Controller', () => {
  let controller: ModelItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelItemController],
    }).compile();

    controller = module.get<ModelItemController>(ModelItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
