import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginModel, LoginResModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private env = environment;
  constructor(private _httpClient: HttpClient) {}

  find(newUser: LoginModel): Observable<LoginResModel> {
    return this._httpClient.post<LoginResModel>(
      this.env.apiRoute + 'newUser',
      newUser
    );
  }
}
