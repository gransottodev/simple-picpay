import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user-controller";
import { CreateUser } from "@src/application/use-cases/create-user";
import { DatabaseModule } from "../database/database.module";
import { ListUsers } from "@src/application/use-cases/list-users";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    UserController
  ],
  providers: [
    CreateUser,
    ListUsers
  ]
})

export class HttpModule { }