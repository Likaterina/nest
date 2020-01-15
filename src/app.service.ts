import { Injectable } from '@nestjs/common';
import { Cat } from "./cats/cat.interface"

@Injectable()
export class AppService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    console.log(cat)
   this.cats.push(cat)
   return cat;
  }

  findAll(): Cat[] {
    return this.cats
  }

  getHello(): string {
    return "Cat"
  }
}
