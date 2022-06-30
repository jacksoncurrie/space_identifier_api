import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export type SpaceDocument = Space & Document;

@Schema()
@ObjectType()
export class Space {
  @Prop()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
