import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Provider } from './provider.schema';
import { ProvidersService } from './providers.service';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  async all(): Promise<Provider[]> {
    return this.providersService.all();
  }

  @Post()
  async create(@Body() provider: Provider): Promise<Provider> {
    return this.providersService.create(provider);
  }
}