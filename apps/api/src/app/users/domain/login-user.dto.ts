import { User } from '@solu-dev/api-interfaces';
export class LoginUserDto implements Omit<User, 'id' | 'email' | 'name' | 'lastname'> {
  username: string;
  password: string;
}
