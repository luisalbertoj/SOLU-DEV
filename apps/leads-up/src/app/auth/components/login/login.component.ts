import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginModel, LoginResModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'solu-dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginData: LoginModel;
  messages: Observable<unknown>;
  constructor(private _loginService: LoginService, private _store: Store) {
    this.loginData = new LoginModel();
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
