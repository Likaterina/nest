import { Injectable } from "@nestjs/common"
import { Cat } from "./cats/cat.interface"
import { ConfigService } from "./configuration/config.service"

@Injectable()
export class AppService {
  private readonly cats: Cat[] = []
  private readonly port: string

  create(cat: Cat) {
    console.log(cat)
    this.cats.push(cat)
    return cat
  }

  constructor(configService: ConfigService) {
    this.port = configService.get("PORT")
  }

  findAll(): Cat[] {
    return this.cats
  }

  getPort(): string {
    return this.port
  }

  getHello(): string {
    return "Cat"
  }
}
