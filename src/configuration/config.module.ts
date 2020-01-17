import { DynamicModule, Module } from "@nestjs/common"
import { ConfigService } from "./config.service"
import { ConfigOptions } from "./interface"
import { CONFIG_OPTIONS } from "./constants"
import { REQUEST } from '@nestjs/core';


export interface ConfigModuleOptions {
  folder: string
}

@Module({
  imports: [],
  providers: [ConfigService],
  exports: [ConfigService,]
})
export class ConfigModule {
  static register(options: ConfigModuleOptions, arg): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: REQUEST,
          useValue: options
        },
        ConfigService,
              
      ],
      exports: [ConfigService]
    }
  }
}
