import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import {
  SpaceItem,
  SpaceItemSchema,
} from '../space-items/schemas/space-item.schema';
import { Space, SpaceSchema } from './schemas/space.schema';
import { SpacesResolver } from './spaces.resolver';
import { SpacesService } from './spaces.service';

describe('SpacesResolver', () => {
  let resolver: SpacesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }]),
        MongooseModule.forFeature([
          { name: SpaceItem.name, schema: SpaceItemSchema },
        ]),
      ],
      providers: [SpacesResolver, SpacesService],
    }).compile();

    resolver = module.get<SpacesResolver>(SpacesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
