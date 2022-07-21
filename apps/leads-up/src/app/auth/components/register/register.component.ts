import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateModel, RegisterResModel } from '../../models/create.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'solu-dev-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitStatus = false;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private _registerService: RegisterService
  ) {}

  registerForm: FormGroup = this.formBuilder.group({
    fullName: [null, { validators: [Validators.required], updateOn: 'change' }],
    email: [
      null,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    phone: [null, { updateOn: 'change' }],
    password: [null, { validators: [Validators.required], updateOn: 'change' }],
  });

  ngOnInit() {
    this.setPhoneValidation();
  }

  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone') as AbstractControl;

    phoneControl.setValidators([
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]);
  }

  /**
   * It's should create new user
   */
  newUser(payload?: unknown): void {
    console.log({ payload });
    console.log(this.registerForm.getRawValue());
    this.submitStatus = true;
    this.loading = true;
    this._registerService
      .create(this.registerForm.getRawValue() as CreateModel)
      .subscribe({
        next: (response: RegisterResModel) => {
          console.log({ response });
          this.loading = false;
        },
        error: (error) => {
          console.log({ error });
          this.loading = false;
        },
      });
  }
}
