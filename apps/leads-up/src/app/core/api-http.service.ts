import { Injectable } from '@angular/core';
// Atento a esta línea, deberás hacer que empate con tu environment
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

const API_URL = environment.apiRoute;

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  protected headers;

  protected apiUrl = API_URL;

  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };
  }

  protected get(url: string): Observable<unknown> {
    return this.http.get(this.apiUrl + url, this.headers);
  }

  protected post({ url, payload }: { url: string; payload: unknown }) {
    return this.http.post('api/' + url, payload, this.headers);
  }
}
