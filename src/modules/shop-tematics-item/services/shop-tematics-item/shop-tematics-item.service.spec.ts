import { Test, TestingModule } from '@nestjs/testing';
import { ShopTematicsItemService } from './shop-tematics-item.service';

describe('ShopTematicsItemService', () => {
  let service: ShopTematicsItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopTematicsItemService],
    }).compile();

    service = module.get<ShopTematicsItemService>(ShopTematicsItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
