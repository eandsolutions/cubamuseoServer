import { Test, TestingModule } from '@nestjs/testing';
import { ClasificationModelService } from './clasification-model.service';

describe('ClasificationModelService', () => {
  let service: ClasificationModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasificationModelService],
    }).compile();

    service = module.get<ClasificationModelService>(ClasificationModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
