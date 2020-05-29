import { Test, TestingModule } from '@nestjs/testing';
import { CategoryStampService } from './category-stamp.service';

describe('CategoryStampService', () => {
  let service: CategoryStampService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryStampService],
    }).compile();

    service = module.get<CategoryStampService>(CategoryStampService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
