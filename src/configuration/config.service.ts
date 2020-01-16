import { Injectable, Inject } from "@nestjs/common"
import * as dotenv from "dotenv"
import * as fs from "fs"
import * as path from "path"
import { EnvConfig } from "./interface"
import { CONFIG_OPTIONS } from "./constants"

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig

  constructor(@Inject(CONFIG_OPTIONS) private options) {
    const filePath = `${process.env.NODE_ENV}.env`
    const envFile = path.resolve(__dirname, "../../", options.folder, filePath)
    this.envConfig = dotenv.parse(fs.readFileSync(envFile))
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}

export default () => ({
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [],
    synchronize: true
  }
})
