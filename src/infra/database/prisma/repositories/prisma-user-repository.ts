import { User } from "@src/application/entities/user/user";
import { UserRepository, UserResponseProps } from "@src/application/repositories/user-repository";
import { PrismaService } from "../database.service";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private prisma: PrismaService
  ){}

  findUsers(): Promise<UserResponseProps[]> {
    return this.prisma.users.findMany()
  }

  async createUser(data: User): Promise<UserResponseProps> {
    const toPrisma = PrismaUserMapper.toPrisma(data)
    
    const user = await this.prisma.users.create({
      data: toPrisma
    })
    
    return user
  }

  async findUserByEmail(email: string): Promise<UserResponseProps> {
    const user = await this.prisma.users.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async findUserByDocument(document: string): Promise<UserResponseProps> {
    const user = await this.prisma.users.findUnique({
      where: {
        document
      }
    })
    
    return user
  }
}