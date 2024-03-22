import { Injectable } from "@nestjs/common";
import { UserProps } from "../entities/user/user";

@Injectable()
export abstract class UserRepository {
  abstract createUser(data: UserProps) : Promise<UserProps>
}