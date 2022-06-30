import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpaceInput {
  @Field(() => String, { description: 'Space name' })
  name: string;
}
