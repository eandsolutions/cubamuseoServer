import { Test, TestingModule } from '@nestjs/testing';
import { ClasificationStampService } from './clasification-stamp.service';

describe('ClasificationStampService', () => {
  let service: ClasificationStampService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasificationStampService],
    }).compile();

    service = module.get<ClasificationStampService>(ClasificationStampService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
