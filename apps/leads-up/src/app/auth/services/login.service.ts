import { Injectable } from '@angular/core';
import { ApiHttpService } from '../../core/api-http.service';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends ApiHttpService {
  login(url: string, payload: LoginModel) {
    return this.post({ url, payload });
  }
}
