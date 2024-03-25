import { User } from "../entities/user/user";

export interface UserResponseProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: string;
  balance: number
}

export abstract class UserRepository {
  abstract createUser(data: User): Promise<UserResponseProps>
  abstract findUserByEmail(email: string): Promise<UserResponseProps>
  abstract findUserByDocument(document: string): Promise<UserResponseProps>
  abstract findUsers(): Promise<UserResponseProps[]>
}