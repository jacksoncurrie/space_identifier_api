import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SpaceItem,
  SpaceItemDocument,
} from 'src/space-items/schemas/space-item.schema';
import { CreateSpaceInput } from './dto/create-space.input';
import { UpdateSpaceInput } from './dto/update-space.input';
import { Space, SpaceDocument } from './schemas/space.schema';

@Injectable()
export class SpacesService {
  constructor(
    @InjectModel(Space.name) private spaceModel: Model<SpaceDocument>,
    @InjectModel(SpaceItem.name)
    private spaceItemModel: Model<SpaceItemDocument>,
  ) {}

  async create(createSpaceInput: CreateSpaceInput): Promise<Space> {
    const space = new this.spaceModel(createSpaceInput);
    return space.save();
  }

  async findAll(): Promise<Space[]> {
    return this.spaceModel.find().populate('spaceItems').exec();
  }

  async findOne(id: string): Promise<Space> {
    return this.spaceModel.findOne({ _id: id }).populate('spaceItems').exec();
  }

  async update(id: string, updateSpaceInput: UpdateSpaceInput): Promise<Space> {
    return this.spaceModel
      .findOneAndUpdate({ _id: id }, updateSpaceInput, { new: true })
      .populate('spaceItems')
      .exec();
  }

  async remove(id: string): Promise<Space> {
    const oldSpace = await this.spaceModel
      .findByIdAndDelete({ _id: id })
      .populate('spaceItems')
      .exec();
    await this.spaceItemModel
      .deleteMany({
        _id: {
          $in: oldSpace.spaceItems.map((spaceItem) => spaceItem._id),
        },
      })
      .exec();
    return oldSpace;
  }
}
