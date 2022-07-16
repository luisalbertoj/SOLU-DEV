import { Component } from '@angular/core';
import { LoginModel, LoginResModel } from '@app/auth/models/login.model';
import { LoginService } from '@app/auth/services/login.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'solu-dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginData: LoginModel = {
    name: '',
    password: '',
    email: '',
  };
  messages: Observable<any>;
  constructor(private _loginService: LoginService, private _store: Store) {
    this.messages = this._store.select((state) => state.messages.messages);
  }

  find(): void {
    this._loginService.find(this.loginData).subscribe({
      next: (response: LoginResModel) => {
        return console.log({ response });
      },
      error: (error) => console.log({ error }),
    });
  }
}
