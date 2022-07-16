import { Component, OnInit } from '@angular/core';
import { LoginModel, LoginResModel } from '@app/auth/models/login.model';
import { LoginService } from '@app/auth/services/login.service';

@Component({
  selector: 'solu-dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  public loginData: LoginModel = {
    name: '',
    password: '',
    email: '',
  }
  constructor(private _loginService: LoginService) {}

  find(): void {
    this._loginService.find(this.loginData).subscribe({
      next: (response: LoginResModel) => {
        return console.log({response});
      },
      error: error => console.log({error})
    });
  }
}
