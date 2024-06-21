import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { AmmosModule } from "./ammos/ammos.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ExceptionLoggingInterceptor } from "./common/interceptor/exception.interceptor";
import { LogsModule } from "./common/interceptor/log.module";
import { LoggingInterceptor } from "./common/interceptor/logging.interceptor";
import { UsersModule } from "./users/users.module";
import { SocketModule } from "./socket/socket.module";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    AmmosModule,
    LogsModule,
    SocketModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExceptionLoggingInterceptor,
    },
  ],
})
export class AppModule { }
