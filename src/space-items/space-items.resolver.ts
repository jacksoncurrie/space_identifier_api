import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpaceItemsService } from './space-items.service';
import { SpaceItem } from './schemas/space-item.schema';
import { CreateSpaceItemInput } from './dto/create-space-item.input';
import { UpdateSpaceItemInput } from './dto/update-space-item.input';

@Resolver(() => SpaceItem)
export class SpaceItemsResolver {
  constructor(private readonly spaceItemsService: SpaceItemsService) {}

  @Mutation(() => SpaceItem)
  createSpaceItem(
    @Args('createSpaceItemInput') createSpaceItemInput: CreateSpaceItemInput,
  ) {
    return this.spaceItemsService.create(createSpaceItemInput);
  }

  @Query(() => [SpaceItem], { name: 'spaceItems' })
  findAll() {
    return this.spaceItemsService.findAll();
  }

  @Query(() => SpaceItem, { name: 'spaceItem' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.spaceItemsService.findOne(id);
  }

  @Mutation(() => SpaceItem)
  updateSpaceItem(
    @Args('updateSpaceItemInput') updateSpaceItemInput: UpdateSpaceItemInput,
  ) {
    return this.spaceItemsService.update(
      updateSpaceItemInput.id,
      updateSpaceItemInput,
    );
  }

  @Mutation(() => SpaceItem)
  removeSpaceItem(@Args('id', { type: () => String }) id: string) {
    return this.spaceItemsService.remove(id);
  }
}
