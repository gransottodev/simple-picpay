import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/database.service";
import { UserRepository } from "@src/application/repositories/user-repository";
import { PrismaUserRepository } from "./prisma/repositories/prisma-user-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ],
  exports: [
    UserRepository
  ]
})

export class DatabaseModule {}