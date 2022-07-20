import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@solu-dev/api-interfaces';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class UserEntity implements Omit<User, 'id'> {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastname: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  username: string;

}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
