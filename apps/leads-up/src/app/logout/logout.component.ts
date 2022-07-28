import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent {
  constructor(private _router: Router) {
    localStorage.removeItem('auth_token');
    this._router.navigate(['/auth']);
  }
}
