import { Test, TestingModule } from '@nestjs/testing';
import { SpaceItemsService } from './space-items.service';

describe('SpaceItemsService', () => {
  let service: SpaceItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceItemsService],
    }).compile();

    service = module.get<SpaceItemsService>(SpaceItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
