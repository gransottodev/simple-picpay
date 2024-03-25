import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user-repository";
import { User, UserProps } from "../entities/user/user";
import { DocumentAlreadyExists } from "./errors/document-already-exists";
import { EmailAlreadyExists } from "./errors/email-already-exist";

@Injectable()
export class CreateUser {
  constructor(
    private userRepository: UserRepository
  ) {}

  private async documentExists(document: string){
    const user = await this.userRepository.findUserByDocument(document)

    if(user){
      throw new DocumentAlreadyExists()
    }

    return
  }

  private async emailExists(email: string){
    const user = await this.userRepository.findUserByEmail(email)

    if(user){
      throw new EmailAlreadyExists()
    }

    return
  }

  async execute(userData: UserProps){
    await this.documentExists(userData.document)
    await this.emailExists(userData.email)

    const newUser = new User(userData)
    
    const user = await this.userRepository.createUser(newUser)

    return user
  }
}