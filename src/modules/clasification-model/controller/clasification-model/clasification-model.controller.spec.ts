import { Test, TestingModule } from '@nestjs/testing';
import { ClasificationModelController } from './clasification-model.controller';

describe('ClasificationModel Controller', () => {
  let controller: ClasificationModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasificationModelController],
    }).compile();

    controller = module.get<ClasificationModelController>(ClasificationModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
