import { Test, TestingModule } from '@nestjs/testing';
import { SpacesResolver } from './spaces.resolver';
import { SpacesService } from './spaces.service';

describe('SpacesResolver', () => {
  let resolver: SpacesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpacesResolver, SpacesService],
    }).compile();

    resolver = module.get<SpacesResolver>(SpacesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
