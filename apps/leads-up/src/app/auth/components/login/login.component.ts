import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { AppComponent } from '../../../app.component';
import { ButtonOneComponent } from '../../../shared/button-one/button-one.component';
import { InputTextOneComponent } from '../../../shared/input-text-one/input-text-one.component';
import { ToastService } from '../../../shared/toast/services/toast.service';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';
import { LoginHooks } from './login.hooks';

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
    if (!LoginHooks.validateData(this.loginData)) {
      this._toast.open({
        detail: 'Username and password is required',
        severity: 'warn',
        summary: 'Warn',
      });
      return false;
    }

    this.isLoading$.next(true);
    this._loginService.login(this.loginData).subscribe({
      next: ({ access_token }) => {
        localStorage.setItem('auth_token', access_token);
        this._toast.close();
        this._router.navigate(['/dashboard'], { replaceUrl: true });
      },
      error: (err) => {
        console.log('login-error', { err });
        setTimeout(() => {
          this._toast.open({
            detail: 'Username or password is invalid ',
            severity: 'error',
            summary: 'Error',
          });
          this.isLoading$.next(false);
        }, 200);
      },
    });
    return true;
  }
}
