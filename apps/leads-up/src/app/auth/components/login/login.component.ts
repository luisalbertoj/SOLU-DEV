import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginModel, LoginResModel } from '../../../auth/models/login.model';
import { LoginService } from '../../../auth/services/login.service';
import { ButtonOneComponent } from '../../../shared/button-one/button-one.component';
import { InputTextOneComponent } from '../../../shared/input-text-one/input-text-one.component';

@Component({
  selector: 'solu-dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, InputTextOneComponent, ButtonOneComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public loginData: LoginModel;
  messages: Observable<any>;
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
