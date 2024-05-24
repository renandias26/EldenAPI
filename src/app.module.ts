import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { AmmosModule } from './ammos/ammos.module';
import { Log, LogSchema } from './common/interceptor/log.schema';
import { LogModel } from './common/interceptor/log.model';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    UsersModule,
    AuthModule,
    AmmosModule
  ],
  controllers: [AppController],
  providers: [
    AppService, LoggingInterceptor, LogModel
  ],
})
export class AppModule { }
