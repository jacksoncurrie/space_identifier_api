import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { SpacesModule } from './spaces/spaces.module';
import { SpaceItemsModule } from './space-items/space-items.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot('mongodb://db/nest'),
    SpacesModule,
    SpaceItemsModule,
  ],
})
export class AppModule {}
