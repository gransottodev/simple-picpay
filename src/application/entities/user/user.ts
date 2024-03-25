export interface UserProps {
  firstName: string;
  lastName: string;
  password: string;
  document: string;
  email: string;
  userType: string;
  balance: number;
}


export class User {
  private props: UserProps

  constructor(props: UserProps){
    this.props = props
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

  public get email() : string {
    return this.props.email
  }

  public set email(emaillAdress: string) {
    this.props.email = emaillAdress
  }

  public get userType() : string {
    return this.props.userType
  }

  public set userType(type: string) {
    this.props.userType = type
  }

  public get balance() : number {
    return this.props.balance
  }

  public set balance(value: number) {
    this.props.balance = value
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