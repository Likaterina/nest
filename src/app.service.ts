import { Injectable } from "@nestjs/common"
import { Cat } from "./cats/cat.interface"
import { ConfigService } from "./configuration/config.service"

@Injectable()
export class AppService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    console.log(cat)
    this.cats.push(cat)
    return cat
  }

  constructor(private readonly configService: ConfigService) {}

  getPort(): number {
    return parseInt(this.configService.get("PORT"))
  }

  findAll(): Cat[] {
    return this.cats
  }
}
