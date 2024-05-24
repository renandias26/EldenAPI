import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios/dist/interfaces/http-module.interface";
import { ConfigService } from "@nestjs/config/dist/config.service";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { EldenVariables } from "./interfaces/EldenVariables.interface";

@Injectable()
export class EldenApiConfig implements HttpModuleOptionsFactory {
    constructor(private configService: ConfigService<EldenVariables>) { }

    createHttpOptions(): HttpModuleOptions {
        return {
            baseURL: this.configService.get('base_url', { infer: true })
        };
    }
}