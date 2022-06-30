import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpaceInput } from './dto/create-space.input';
import { UpdateSpaceInput } from './dto/update-space.input';
import { Space, SpaceDocument } from './schemas/space.schema';

@Injectable()
export class SpacesService {
  constructor(
    @InjectModel(Space.name) private spaceModel: Model<SpaceDocument>,
  ) {}

  async create(createSpaceInput: CreateSpaceInput): Promise<Space> {
    const space = new this.spaceModel(createSpaceInput);
    return space.save();
  }

  async findAll(): Promise<Space[]> {
    return this.spaceModel.find().exec();
  }

  async findOne(id: string): Promise<Space> {
    return this.spaceModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateSpaceInput: UpdateSpaceInput): Promise<Space> {
    return this.spaceModel
      .findOneAndUpdate({ _id: id }, updateSpaceInput, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Space> {
    return this.spaceModel.findByIdAndDelete({ _id: id }).exec();
  }
}
