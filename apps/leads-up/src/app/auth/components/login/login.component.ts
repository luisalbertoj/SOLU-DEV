import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ButtonOneComponent } from '../../../shared/button-one/button-one.component';
import { InputTextOneComponent } from '../../../shared/input-text-one/input-text-one.component';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'solu-dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, InputTextOneComponent, ButtonOneComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public loginData: LoginModel;
  public isLoading: boolean;
  constructor(private _loginService: LoginService, private _router: Router) {
    this.loginData = new LoginModel();
    this.isLoading = false;
  }

  handleLogin() {
    this.isLoading = true;
    if (!this.loginData.password || !this.loginData.username) {
      return console.log('Datos no validos');
    }
    this._loginService
      .login('auth/login', this.loginData)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: ({ access_token }: any) =>
          localStorage.setItem('auth_token', access_token),
        error: (err) => console.log({ err }),
        complete: () => this._router.navigate(['/'], { replaceUrl: true }),
      });
  }
}
