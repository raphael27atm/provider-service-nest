import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop({
    type: String,
    unique: true,
  })
  username: string;

  @Prop()
  passwrod: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
