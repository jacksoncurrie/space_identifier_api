import { CreateSpaceItemInput } from './create-space-item.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpaceItemInput extends PartialType(CreateSpaceItemInput) {
  @Field(() => String)
  id: string;
}
