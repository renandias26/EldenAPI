import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { EldenAPIService } from "./EldenApi.service";
import { EldenApiConfig } from "./EldenApi.config";
import { ConfigModule } from "@nestjs/config/dist/config.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useClass: EldenApiConfig,
        }),
    ],
    providers: [EldenAPIService],
    exports: [EldenAPIService],
})
export class EldenAPIModule { }