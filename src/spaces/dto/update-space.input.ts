import { CreateSpaceInput } from './create-space.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpaceInput extends PartialType(CreateSpaceInput) {
  @Field(() => String)
  id: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
