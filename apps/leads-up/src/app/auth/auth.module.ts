import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ButtonDefault1Component } from '../shared/button-default1/button-default1.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDefault1Component,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class AuthModule {}
