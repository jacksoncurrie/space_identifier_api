import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpaceItemInput {
  @Field(() => String, { description: 'Space item name' })
  name: string;

  @Field(() => String, { description: 'Parent space ID' })
  space: string;
}
