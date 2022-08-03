import { LoginModel } from '../../models/login.model';

export class LoginHooks {
  static validateData({ username, password }: LoginModel): boolean {
    if (!password || !username) {
      return false;
    }
    return true;
  }
}
