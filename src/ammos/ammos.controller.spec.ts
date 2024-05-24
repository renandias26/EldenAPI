import { Test, TestingModule } from '@nestjs/testing';
import { AmmosController } from './ammos.controller';
import { AmmosService } from './ammos.service';

describe('AmmosController', () => {
  let controller: AmmosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmmosController],
      providers: [AmmosService],
    }).compile();

    controller = module.get<AmmosController>(AmmosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
