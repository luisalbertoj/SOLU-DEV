import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Subscription } from 'rxjs';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'solu-dev-breadcrumb-one',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
  ],
  templateUrl: './breadcrumb-one.component.html',
  providers: [BreadcrumbService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbOneComponent implements OnDestroy {
  subscription: Subscription;

  items!: MenuItem[];

  home: MenuItem;

  search!: string;

  constructor(
    public breadcrumbService: BreadcrumbService,
    public appMain: DashboardMenuOneComponent
  ) {
    this.subscription = breadcrumbService.itemsHandler.subscribe((response) => {
      this.items = response;
    });

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
