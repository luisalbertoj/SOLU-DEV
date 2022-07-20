import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../../users/domain/login-user.dto';
import { TokenUserDto } from '../../users/domain/token-user.dto';
import { UsersService } from '../../users/application/users.service';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService
  ) {}

  async validateUser(user: LoginUserDto): Promise<any> {
    const userFind = await this._usersService.findOne(user.username);
    if (userFind && userFind.password === user.password) {
      const { password, ...result } = userFind;
      return result;
    }
    return null;
  }

  async login(user: TokenUserDto) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
