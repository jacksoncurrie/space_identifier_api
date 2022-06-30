import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpaceItemInput } from './dto/create-space-item.input';
import { UpdateSpaceItemInput } from './dto/update-space-item.input';
import { SpaceItem, SpaceItemDocument } from './schemas/space-item.schema';

@Injectable()
export class SpaceItemsService {
  constructor(
    @InjectModel(SpaceItem.name)
    private spaceItemModel: Model<SpaceItemDocument>,
  ) {}

  async create(createSpaceItemInput: CreateSpaceItemInput): Promise<SpaceItem> {
    const spaceItem = new this.spaceItemModel(createSpaceItemInput);
    return spaceItem.save();
  }

  async findAll(): Promise<SpaceItem[]> {
    return await this.spaceItemModel.find().populate('space').exec();
  }

  async findOne(id: string): Promise<SpaceItem> {
    return this.spaceItemModel.findOne({ _id: id }).populate('space').exec();
  }

  async update(
    id: string,
    updateSpaceItemInput: UpdateSpaceItemInput,
  ): Promise<SpaceItem> {
    return this.spaceItemModel
      .findOneAndUpdate({ _id: id }, updateSpaceItemInput, { new: true })
      .populate('space')
      .exec();
  }

  async remove(id: string): Promise<SpaceItem> {
    return this.spaceItemModel
      .findByIdAndDelete({ _id: id })
      .populate('space')
      .exec();
  }
}
