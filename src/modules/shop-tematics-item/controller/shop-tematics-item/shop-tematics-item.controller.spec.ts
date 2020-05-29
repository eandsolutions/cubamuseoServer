import { Test, TestingModule } from '@nestjs/testing';
import { ShopTematicsItemController } from './shop-tematics-item.controller';

describe('ShopTematicsItem Controller', () => {
  let controller: ShopTematicsItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopTematicsItemController],
    }).compile();

    controller = module.get<ShopTematicsItemController>(ShopTematicsItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
