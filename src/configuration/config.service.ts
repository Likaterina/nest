import { Injectable, Inject, Scope } from "@nestjs/common"
import * as dotenv from "dotenv"
import * as fs from "fs"
import * as path from "path"
import { EnvConfig, ConfigOptions } from "./interface"
import { CONFIG_OPTIONS } from "./constants"
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST})
export class ConfigService {
  private readonly envConfig: EnvConfig
  

  constructor(@Inject (REQUEST) options: ConfigOptions) {
    const filePath = `${process.env.NODE_ENV || "conf"}.env`
    const envFile = path.resolve(__dirname, "../../", options.folder, filePath)
    this.envConfig = dotenv.parse(fs.readFileSync(envFile))
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
