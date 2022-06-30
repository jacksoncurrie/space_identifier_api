import { Module } from '@nestjs/common';
import { SpaceItemsService } from './space-items.service';
import { SpaceItemsResolver } from './space-items.resolver';
import { SpaceItem, SpaceItemSchema } from './schemas/space-item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SpaceItem.name, schema: SpaceItemSchema },
    ]),
  ],
  providers: [SpaceItemsResolver, SpaceItemsService],
})
export class SpaceItemsModule {}
