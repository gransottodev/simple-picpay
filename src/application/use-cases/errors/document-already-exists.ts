import { BadRequestException } from "@nestjs/common";

export class DocumentAlreadyExists extends BadRequestException {
  constructor(){
    super('Já existe um usuário cadastrado com esse documento')
  }
}