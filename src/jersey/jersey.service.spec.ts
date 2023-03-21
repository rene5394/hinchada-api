import { Test, TestingModule } from '@nestjs/testing';
import { JerseyService } from './jersey.service';

describe('JerseyService', () => {
  let service: JerseyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JerseyService],
    }).compile();

    service = module.get<JerseyService>(JerseyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
