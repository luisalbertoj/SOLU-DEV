import { Component, OnInit } from '@angular/core';
import { RegisterModel, RegisterResModel } from '@app/auth/models/register.model';
import { RegisterService } from '@app/auth/services/register.service';

@Component({
  selector: 'solu-dev-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  {

  // Modelo de datos que se bindea con el html por medio del ngModel
  public registerData: RegisterModel = {
    name: '',
    password: '',
    email: '',
  }
  // se inyecta el servicio de registro por medio del constructor
  constructor(private _registerService: RegisterService) {}

  // metodo de registro envia los datos al servicio
  newUser(): void {
    // se llama al metodo create del servicio y se pasan los datos a del modelo del formulario
    this._registerService.create(this.registerData).subscribe({
      // manejo de la respuesta correcta del servidor
      next: (response: RegisterResModel) => {
        return console.log({response});
      },
      // manejo de la respuesta erronea
      error: error => console.log({error})
    });
  }
}
