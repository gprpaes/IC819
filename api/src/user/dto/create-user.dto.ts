import User from '../entities/user.entity';

export class CreateUserDto {
  name: string;
  cpf: string;
  address: string;
  email: string;
  phone: string;
  birthday: Date;
  username: string;
  password: string;
  postion: string;
  isSuperUser: boolean;
  parentUser: User;
}
