import { User } from '@solu-dev/api-interfaces';
export class TokenUserDto
  implements Omit<User, 'password' | 'email' | 'name' | 'lastname'>
{
  username: string;
  id: number;
}
