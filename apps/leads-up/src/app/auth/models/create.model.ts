import { User } from '@solu-dev/api-interfaces';
export class CreateModel implements Omit<User, 'id'> {
  username: string;
  password: string;
  email: string;
  name: string;
  lastname: string;
  constructor() {
    this.username = '';
    this.password = '';
    this.email = '';
    this.name = '';
    this.lastname = '';
  }
}
export interface RegisterResModel {
  code: number;
  status: boolean;
  message?: string;
}
