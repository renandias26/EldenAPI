// src/logs/logs.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './log.schema';
import { LogsService } from './log.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
    providers: [LogsService],
    exports: [LogsService],
})
export class LogsModule { }
