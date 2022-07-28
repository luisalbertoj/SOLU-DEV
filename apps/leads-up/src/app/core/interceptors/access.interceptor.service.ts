import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}
  intercept(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: HttpRequest<any>,
    next: HttpHandler
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (this._router.url !== '/auth' && err.status === 401) {
          console.log(this._router.url);
          localStorage.removeItem('auth_token');
          this._router.navigate(['/access']);
        }
        return of();
      })
    );
  }
}
