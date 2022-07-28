import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from '../app.component';

@Component({
  selector: 'solu-dev-access-denied',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessDeniedComponent {
  constructor(public app: AppComponent) {}
}
