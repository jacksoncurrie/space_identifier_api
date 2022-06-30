import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Space, SpaceSchema } from './schemas/space.schema';
import {
  SpaceItem,
  SpaceItemSchema,
} from 'src/space-items/schemas/space-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }]),
    MongooseModule.forFeature([
      { name: SpaceItem.name, schema: SpaceItemSchema },
    ]),
  ],
  providers: [SpacesResolver, SpacesService],
})
export class SpacesModule {}
