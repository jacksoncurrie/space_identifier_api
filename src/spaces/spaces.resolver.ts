import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpacesService } from './spaces.service';
import { Space } from './schemas/space.schema';
import { CreateSpaceInput } from './dto/create-space.input';
import { UpdateSpaceInput } from './dto/update-space.input';

@Resolver(() => Space)
export class SpacesResolver {
  constructor(private readonly spacesService: SpacesService) {}

  @Mutation(() => Space)
  createSpace(@Args('createSpaceInput') createSpaceInput: CreateSpaceInput) {
    return this.spacesService.create(createSpaceInput);
  }

  @Query(() => [Space], { name: 'spaces' })
  findAll() {
    return this.spacesService.findAll();
  }

  @Query(() => Space, { name: 'space' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.spacesService.findOne(id);
  }

  @Mutation(() => Space)
  updateSpace(@Args('updateSpaceInput') updateSpaceInput: UpdateSpaceInput) {
    return this.spacesService.update(updateSpaceInput.id, updateSpaceInput);
  }

  @Mutation(() => Space)
  removeSpace(@Args('id', { type: () => String }) id: string) {
    return this.spacesService.remove(id);
  }
}
