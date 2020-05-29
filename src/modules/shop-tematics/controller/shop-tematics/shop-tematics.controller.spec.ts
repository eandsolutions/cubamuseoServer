import { Test, TestingModule } from '@nestjs/testing';
import { ShopTematicsController } from './shop-tematics.controller';

describe('ShopTematics Controller', () => {
  let controller: ShopTematicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopTematicsController],
    }).compile();

    controller = module.get<ShopTematicsController>(ShopTematicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
