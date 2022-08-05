import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
      tap({
        next: (interceptHttp) => console.log({ interceptHttp }),
        error: (err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 && this._router.url !== '/auth') {
              localStorage.removeItem('auth_token');
              this._router.navigate(['/access']);
              return;
            }
          }
        },
      })
    );
  }
}
