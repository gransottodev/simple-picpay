import { User } from "@src/application/entities/user/user";

export class PrismaUserMapper {
  static toPrisma(userData: User){
    return {
      firstName: userData.firstName,
      lastName: userData.lastName,
      password: userData.password,
      document: userData.document,
      email: userData.email,
      userType: userData.userType,
      balance: userData.balance
    }
  }
}