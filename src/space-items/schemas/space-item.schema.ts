import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Space } from 'src/spaces/schemas/space.schema';

export type SpaceItemDocument = SpaceItem & Document;

@Schema()
@ObjectType()
export class SpaceItem {
  @Field(() => String, { description: 'Space item ID' })
  _id: string;

  @Prop()
  @Field(() => String, { description: 'Space item name' })
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Space' })
  @Field(() => Space, { description: 'Parent space' })
  space: Space;
}

export const SpaceItemSchema = SchemaFactory.createForClass(SpaceItem);
