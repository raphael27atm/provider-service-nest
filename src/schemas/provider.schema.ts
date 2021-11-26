import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Provider extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
