import { Global, Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketGateway } from 'src/socket/socket.gateway';
import { Message, MessageSchema } from './schema/socket.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
  providers: [SocketService, SocketGateway],
  exports: [SocketGateway, SocketService]
})
export class SocketModule { }
