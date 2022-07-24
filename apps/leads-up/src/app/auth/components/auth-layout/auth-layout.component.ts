import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'solu-dev-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  public menu: MenuItem[];
  constructor() {
    this.menu = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        routerLink: 'login',
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-users',
        routerLink: 'register',
      },
    ];
  }
}
