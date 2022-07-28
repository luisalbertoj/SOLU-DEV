import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';
import { MenuOneComponent } from '../menu-one/menu-one.component';

@Component({
  selector: 'solu-dev-top-bar-one',
  standalone: true,
  imports: [CommonModule, MenuOneComponent],
  templateUrl: './top-bar-one.component.html',
  styleUrls: ['./top-bar-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarOneComponent {
  constructor(
    public app: AppComponent,
    public appMain: DashboardMenuOneComponent
  ) {}
}
