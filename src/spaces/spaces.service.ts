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

  findAll(): Promise<Space[]> {
    return this.spaceModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} space`;
  }

  update(id: number, updateSpaceInput: UpdateSpaceInput) {
    return `This action updates a #${id} space`;
  }

  remove(id: number) {
    return `This action removes a #${id} space`;
  }
}
