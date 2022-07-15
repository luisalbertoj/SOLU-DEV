import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';
import { RegisterModel, RegisterResModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private env = environment;
  // Se inyecta el modulo de protocolo http para generar peticiones get put etc...
  constructor(private _httpClient: HttpClient) { }

  create(newUser: RegisterModel): Observable<RegisterResModel> {
    return this._httpClient.post<RegisterResModel>(this.env.apiRoute + 'newUser', newUser);
  }
}
