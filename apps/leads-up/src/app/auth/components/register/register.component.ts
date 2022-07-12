import { Component, OnInit } from '@angular/core';
import { RegisterModel, RegisterResModel } from '@app/auth/models/register.model';
import { RegisterService } from '@app/auth/services/register.service';

@Component({
  selector: 'solu-dev-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  {
  public registerData: RegisterModel = {
    name: '',
    password: '',
    email: '',
  }
  constructor(private _registerService: RegisterService) {}

  newUser(): void {
    this._registerService.create(this.registerData).subscribe({
      next: (response: RegisterResModel) => {
        return console.log({response});
      },
      error: error => console.log({error})
    });
  }
}
