import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Space, SpaceSchema } from './schemas/space.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }]),
  ],
  providers: [SpacesResolver, SpacesService],
})
export class SpacesModule {}
