import { Test, TestingModule } from '@nestjs/testing';
import { PatchController } from './patch.controller';
import { PatchService } from './patch.service';

describe('PatchController', () => {
  let controller: PatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatchController],
      providers: [PatchService],
    }).compile();

    controller = module.get<PatchController>(PatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
