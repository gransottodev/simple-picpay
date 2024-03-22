import { randomUUID } from "node:crypto";

export interface UserProps {
  firstName: string;
  lastName: string;
  password: string;
  document: string;
}


export class User {
  private _id: string;
  private props: UserProps

  constructor(props: UserProps, id?: string){
    this._id = id ?? randomUUID()
    this.props = props
  }

  public get id(): string{
    return this._id
  }

  public get firstName() : string {
    return this.props.firstName
  }

  public set firstName(name: string) {
    this.props.firstName = name
  }

  public get lastName() : string {
    return this.props.lastName
  }

  public set lastName(name: string) {
    this.props.lastName = name
  }

  public get password() : string {
    return this.props.password
  }

  public set password(password: string) {
    this.props.password = password
  }

  public get document() : string {
    return this.props.document
  }

  public set document(doc: string) {
    this.props.password = doc
  }
}