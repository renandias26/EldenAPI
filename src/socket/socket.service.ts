import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schema/socket.schema';

@Injectable()
export class SocketService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) { }

  async create(CreateMessageDto: CreateMessageDto) {
    const createMessage = new this.messageModel(CreateMessageDto);
    return createMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find();
  }
}
