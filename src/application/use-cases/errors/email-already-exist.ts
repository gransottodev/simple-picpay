import { BadRequestException } from "@nestjs/common";

export class EmailAlreadyExists extends BadRequestException {
  constructor(){
    super('Já existe um usuário com esse email, tente novamente !')
  }
}