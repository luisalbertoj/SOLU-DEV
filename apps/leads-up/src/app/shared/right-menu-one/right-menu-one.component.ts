import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';

@Component({
  selector: 'solu-dev-right-menu-one',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule],
  templateUrl: './right-menu-one.component.html',
  styleUrls: ['./right-menu-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightMenuOneComponent {
  date!: Date;

  constructor(public appMain: DashboardMenuOneComponent) {}

  close() {
    this.appMain.rightMenuActive = false;
    this.appMain.rightMenuActive$.next(false);
  }
}
