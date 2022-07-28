import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { catchError, Subject } from 'rxjs';
import { AppComponent } from '../../../app.component';
import { ButtonOneComponent } from '../../../shared/button-one/button-one.component';
import { InputTextOneComponent } from '../../../shared/input-text-one/input-text-one.component';
import { ToastService } from '../../../shared/toast/services/toast.service';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'solu-dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    InputTextOneComponent,
    ButtonOneComponent,
    RouterModule,
  ],
  providers: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public loginData: LoginModel;
  public isLoading$ = new Subject<boolean>();
  public btnIsDisabled!: boolean;
  constructor(
    private _loginService: LoginService,
    private _router: Router,
    public app: AppComponent,
    private _toast: ToastService
  ) {
    this.loginData = new LoginModel();
  }

  handleLogin(evt?: Event) {
    if (evt) evt.preventDefault();
    if (!this.loginData.password || !this.loginData.username) {
      return this._toast.open({
        detail: 'Username and password is required',
        severity: 'warn',
        summary: 'Warn',
      });
    }

    this.isLoading$.next(true);
    this._loginService
      .login('auth/login', this.loginData)
      .pipe(
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: ({ access_token }) => {
          localStorage.setItem('auth_token', access_token);
          this._toast.close();
          this._router.navigate(['/dashboard'], { replaceUrl: true });
        },
        error: (err) => {
          console.log('login-error', { err });
          this.isLoading$.next(false);
        },
        complete: () => {
          setTimeout(() => {
            this._toast.open({
              detail: 'Username or password is invalid',
              severity: 'error',
              summary: 'Error',
            });
            this.isLoading$.next(false);
          }, 200);
        },
      });
  }
}
