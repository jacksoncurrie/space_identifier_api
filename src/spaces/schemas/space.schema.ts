import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type SpaceDocument = Space & Document;

@Schema()
@ObjectType()
export class Space {
  @Field(() => String, { description: 'Space ID' })
  _id: string;

  @Prop()
  @Field(() => String, { description: 'Space name' })
  name: string;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
