import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from '../app.component';

@Component({
  selector: 'solu-dev-error',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  constructor(public app: AppComponent) {}
}
