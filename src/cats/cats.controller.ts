import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  Query,
  Delete,
  Param,
  Put
} from "@nestjs/common"
import { CreateCatDto } from "./create-cat.dto"
import { CatsService } from "./cats.service"
import { Cat } from "./cat.interface"

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get()
  getHello(): string {
    return this.catsService.getHello();
  }
}
