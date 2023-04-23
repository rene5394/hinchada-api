import { Test, TestingModule } from '@nestjs/testing';
import { JerseyController } from './jersey.controller';
import { JerseyService } from './jersey.service';

describe('JerseyController', () => {
  let controller: JerseyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JerseyController],
      providers: [JerseyService],
    }).compile();

    controller = module.get<JerseyController>(JerseyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
