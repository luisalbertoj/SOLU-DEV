import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from '../../core/services/api-http.service';
import { LoginModel, LoginResModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends ApiHttpService {
  login(payload: LoginModel): Observable<LoginResModel> {
    return this.post({
      url: 'auth/login',
      payload,
    }) as Observable<LoginResModel>;
  }
}
