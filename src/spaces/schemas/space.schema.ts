import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { SpaceItem } from 'src/space-items/schemas/space-item.schema';

export type SpaceDocument = Space & Document;

@Schema()
@ObjectType()
export class Space {
  @Field(() => String, { description: 'Space ID' })
  _id: string;

  @Prop()
  @Field(() => String, { description: 'Space name' })
  name: string;

  @Field(() => [SpaceItem], { description: 'Space items' })
  spaceItems: SpaceItem[];
}

export const SpaceSchema = SchemaFactory.createForClass(Space);

SpaceSchema.virtual('spaceItems', {
  ref: 'SpaceItem',
  localField: '_id',
  foreignField: 'space',
  justOne: false,
});
