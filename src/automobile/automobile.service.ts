import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AutomobileInput } from './model/automobile.input';
import { Automobile, AutomobileDocument } from './schema/automobile.schema';

@Injectable()
export class AutomobileService {
  constructor(
    @InjectModel('Automobile')
    private readonly automobileModel: Model<AutomobileDocument>,
  ) {}

  async getAutomobiles(): Promise<Automobile[]> {
    return await this.automobileModel.find();
  }

  async getAutomobileByID(id: String): Promise<Automobile> {
    return await this.automobileModel.findById(id);
  }

  async createAutomobile(automobileDto: AutomobileInput): Promise<Automobile> {
    const automobile = new this.automobileModel(automobileDto);
    return automobile.save();
  }

  async deleteAutomobile(id: string): Promise<any> {
    const automobileDeleted = await this.automobileModel.findByIdAndDelete(id);
    return automobileDeleted;
  }

  async updateAutomobile(id: string, automobileDto: AutomobileInput): Promise<Automobile> {
    const automobileUpdate = await this.automobileModel.findByIdAndUpdate(
      id,
      automobileDto,
      { new: true },
    );
    automobileUpdate.save();
    return automobileUpdate;
  }
}
