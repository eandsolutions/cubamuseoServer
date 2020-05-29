import { Test, TestingModule } from '@nestjs/testing';
import { ShopTematicsService } from './shop-tematics.service';

describe('ShopTematicsService', () => {
  let service: ShopTematicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopTematicsService],
    }).compile();

    service = module.get<ShopTematicsService>(ShopTematicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
