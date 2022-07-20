import { environment } from '../../environments/environment';

export const jwtConstants = {
  secret: environment.secretKey,
  expiresIn: environment.expiresIn,
};
