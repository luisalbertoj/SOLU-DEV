import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardMenuOneComponent } from '../../shared/dashboard-menu-one/dashboard-menu-one.component';

@Component({
  selector: 'solu-dev-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardMenuOneComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
