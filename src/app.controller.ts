import { Controller, Get, Post, Body } from "@nestjs/common"
import { AppService } from "./app.service"
import { CreateCatDto } from "./cats/create-cat.dto"
import { Cat } from "./cats/cat.interface"

@Controller("cats")
export class AppController {
  constructor(private readonly catsService: AppService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log("post")
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log("msg")
    return this.catsService.findAll()
  }
}
