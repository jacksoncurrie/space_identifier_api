import { CreateSpaceInput } from './create-space.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpaceInput extends PartialType(CreateSpaceInput) {
  @Field(() => Int)
  id: number;
}
