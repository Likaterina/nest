import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (сonfigService: ConfigService) => ({
        type: "mysql",
        host: сonfigService.get("DB_HOST"),
        port: сonfigService.get("DB_PORT"),
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
export class AppModule {}
