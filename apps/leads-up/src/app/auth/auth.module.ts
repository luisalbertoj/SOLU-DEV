import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavBarOneComponent } from '../shared/nav-bar-one/nav-bar-one.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, AuthRoutingModule, NavBarOneComponent],
})
export class AuthModule {}
