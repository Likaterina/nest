import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigService } from "./configuration/config.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import * as Joi from "@hapi/joi"
import { ConfigModule } from "./configuration/config.module"
import { Connection } from "typeorm"

@Module({
  imports: [
    ConfigModule.register(
      { folder: "./config" },
      Joi.object({
        DB_NAME: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        DB_PORT: Joi.number()
          .default(3306)
          .required(),
        PORT: Joi.number()
          .default(3000)
          .required()
      })
    ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (сonfigService: ConfigService) => ({
        type: "mysql",
        host: сonfigService.get("DB_HOST"),
        port: parseInt(сonfigService.get("DB_PORT")),
        username: сonfigService.get("DB_USER"),
        password: сonfigService.get("DB_PASS"),
        database: сonfigService.get("DB_NAME"),
        entities: [],
        synchronize: true
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
 
}
