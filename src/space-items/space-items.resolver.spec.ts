import { Test, TestingModule } from '@nestjs/testing';
import { SpaceItemsResolver } from './space-items.resolver';
import { SpaceItemsService } from './space-items.service';

describe('SpaceItemsResolver', () => {
  let resolver: SpaceItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceItemsResolver, SpaceItemsService],
    }).compile();

    resolver = module.get<SpaceItemsResolver>(SpaceItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
