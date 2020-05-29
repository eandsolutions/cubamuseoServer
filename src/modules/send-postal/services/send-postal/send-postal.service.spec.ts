import { Test, TestingModule } from '@nestjs/testing';
import { SendPostalService } from './send-postal.service';

describe('SendPostalService', () => {
  let service: SendPostalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendPostalService],
    }).compile();

    service = module.get<SendPostalService>(SendPostalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
