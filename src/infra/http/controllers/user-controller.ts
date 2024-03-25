import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUser } from "@src/application/use-cases/create-user";
import { CreateUserDTO } from "../dtos/create-user-dto";
import { ListUsers } from "@src/application/use-cases/list-users";

@Controller('users')
export class UserController{
  constructor(
    private createUser: CreateUser,
    private listUsers: ListUsers
  ){}

  @Post()
  async create(@Body() body: CreateUserDTO){
    const user = await this.createUser.execute(body)

    return user;
  }

  @Get()
  async listAllUsers(){
    return await this.listUsers.execute()
  }
}