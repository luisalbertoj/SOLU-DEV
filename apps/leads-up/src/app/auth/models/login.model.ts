import { User } from '@solu-dev/api-interfaces';

export class LoginModel
  implements Omit<User, 'id' | 'email' | 'name' | 'lastname'>
{
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}
export interface LoginResModel {
  access_token: string;
}
