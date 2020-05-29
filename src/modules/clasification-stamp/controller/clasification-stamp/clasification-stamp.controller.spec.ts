import { Test, TestingModule } from '@nestjs/testing';
import { ClasificationStampController } from './clasification-stamp.controller';

describe('ClasificationStamp Controller', () => {
  let controller: ClasificationStampController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasificationStampController],
    }).compile();

    controller = module.get<ClasificationStampController>(ClasificationStampController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
