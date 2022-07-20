import { User } from '@solu-dev/api-interfaces';
export class CreateUserDto implements Omit<User, 'id'> {
 username: string;
 password: string;
 email: string;
 name: string;
 lastname: string;
}
