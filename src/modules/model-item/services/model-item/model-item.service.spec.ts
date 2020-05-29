import { Test, TestingModule } from '@nestjs/testing';
import { ModelItemService } from './model-item.service';

describe('ModelItemService', () => {
  let service: ModelItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelItemService],
    }).compile();

    service = module.get<ModelItemService>(ModelItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
