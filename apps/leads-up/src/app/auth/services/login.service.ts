import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from '../../core/services/api-http.service';
import { LoginModel, LoginResModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends ApiHttpService {
  login(url: string, payload: LoginModel): Observable<LoginResModel> {
    return this.post({ url, payload }) as Observable<LoginResModel>;
  }
}
