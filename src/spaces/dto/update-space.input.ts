import { CreateSpaceInput } from './create-space.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpaceInput extends PartialType(CreateSpaceInput) {
  @Field(() => String)
  id: string;
}
