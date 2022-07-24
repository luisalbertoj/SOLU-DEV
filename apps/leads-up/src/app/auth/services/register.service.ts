import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CreateModel, RegisterResModel } from '../models/create.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private env = environment;
  // Se inyecta el modulo de protocolo http para generar peticiones get put etc...
  constructor(private _httpClient: HttpClient) {}

  create(newUser: CreateModel): Observable<RegisterResModel> {
    return this._httpClient.post<RegisterResModel>(
      this.env.apiRoute + 'newUser',
      newUser
    );
  }
}
