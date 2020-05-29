import { Test, TestingModule } from '@nestjs/testing';
import { CategoryPostalService } from './category-postal.service';

describe('CategoryPostalService', () => {
  let service: CategoryPostalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryPostalService],
    }).compile();

    service = module.get<CategoryPostalService>(CategoryPostalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
