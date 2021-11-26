import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Provider } from './provider.schema';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectModel(Provider.name) private providerModel: Model<Provider>,
  ) {}

  async all(): Promise<Provider[]> {
    return this.providerModel.find().exec();
  }

  async create(provider: Provider): Promise<Provider> {
    const newProvider = new this.providerModel(provider);

    return newProvider.save();
  }

  async show(id: string, provider: Provider): Promise<Provider> {
    return this.providerModel.findByIdAndUpdate(id, provider).exec();
  }

  async destoy(id: string) {
    const providerDelete = this.providerModel.findByIdAndDelete({ _id: id });

    return (await providerDelete).remove();
  }
}
