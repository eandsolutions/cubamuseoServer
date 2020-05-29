import { Test, TestingModule } from '@nestjs/testing';
import { SendPostalController } from './send-postal.controller';

describe('SendPostal Controller', () => {
  let controller: SendPostalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendPostalController],
    }).compile();

    controller = module.get<SendPostalController>(SendPostalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
