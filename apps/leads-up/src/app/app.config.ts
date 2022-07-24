import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable()
export class AppConfig {
  load() {
    return new Promise((resolve) => {
      const token =
        localStorage.getItem('auth_token') === null
          ? false
          : localStorage.getItem('auth_token');
      if (token) {
        try {
          if (helper.isTokenExpired(token) === true) {
            localStorage.removeItem('auth_token');
          }
        } catch (exception) {
          localStorage.removeItem('auth_token');
        }
      }
      resolve(true);
    });
  }
}
