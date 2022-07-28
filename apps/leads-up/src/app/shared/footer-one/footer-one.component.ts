import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'solu-dev-footer-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterOneComponent {
  constructor(public app: AppComponent) {}
}
