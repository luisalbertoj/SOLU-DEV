import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from '../app.component';

@Component({
  selector: 'solu-dev-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  constructor(public app: AppComponent) {}
}
