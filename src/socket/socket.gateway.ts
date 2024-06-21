import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'
import { CreateMessageDto } from 'src/socket/dto/create-message.dto';
import { SocketService } from 'src/socket/socket.service';
import { ClientMessageDto } from './dto/client-message.dto';

@WebSocketGateway({ cors: { origin: 'http://127.0.0.1:5500', credentials: true } })
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server
  constructor(private readonly socketService: SocketService) { }
  private logger: Logger = new Logger('SocketGateway')
  private messages: Server[] = []

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, Payload: ClientMessageDto) {

    const obj: CreateMessageDto = {
      clientID: client.id,
      content: Payload.content,
      username: Payload.username
    }

    console.log(obj)

    await this.socketService.create(obj)

    this.server.emit('msgToClient', Payload.content, client.id)
  }

  afterInit(server: Server) {
    this.logger.log('Init')
  }

  handleDisconnect(client: any) {
    this.logger.log('Disconnected')
  }

  async handleConnection(client: any, ...args: any[]) {
    const messages = await this.socketService.findAll()
    client.emit('oldMessages', messages, client.id)

    this.logger.log('Connected')
  }
}

