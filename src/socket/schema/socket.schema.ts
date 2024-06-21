import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
    @Prop()
    content: string;

    @Prop()
    username: string;

    @Prop()
    clientID: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);