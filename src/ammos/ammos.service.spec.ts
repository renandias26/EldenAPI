import { Test, TestingModule } from '@nestjs/testing';
import { AmmosService } from './ammos.service';

describe('AmmosService', () => {
  let service: AmmosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmmosService],
    }).compile();

    service = module.get<AmmosService>(AmmosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
