import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpaceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
