import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';
import { AppComponent } from '../../app.component';
import { AppConfigComponent } from '../app-config/app-config.component';
import { BreadcrumbOneComponent } from '../breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../footer-one/footer-one.component';
import { MenuOneComponent } from '../menu-one/menu-one.component';
import { RightMenuOneComponent } from '../right-menu-one/right-menu-one.component';
import { TopBarOneComponent } from '../top-bar-one/top-bar-one.component';
import { MenuService } from './services/dashboard-menu.service';

@Component({
  selector: 'solu-dev-dashboard-menu-one',
  standalone: true,
  imports: [
    CommonModule,
    TopBarOneComponent,
    MenuOneComponent,
    BreadcrumbOneComponent,
    RouterModule,
    AppConfigComponent,
    FooterOneComponent,
    RightMenuOneComponent,
  ],
  providers: [MenuService],
  templateUrl: './dashboard-menu-one.component.html',
  styleUrls: ['./dashboard-menu-one.component.scss'],
})
export class DashboardMenuOneComponent {
  overlayMenuActive!: boolean;

  staticMenuDesktopInactive = false;

  staticMenuMobileActive!: boolean;

  sidebarActive$ = new Subject<boolean>();

  sidebarActive = false;

  sidebarStatic = false;

  menuClick!: boolean;

  menuHoverActive = false;

  topbarMenuActive!: boolean;

  topbarItemClick!: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activeTopbarItem!: any;

  configActive$ = new Subject<boolean>();

  configActive!: boolean;

  configClick!: boolean;

  rightMenuActive$ = new Subject<boolean>();

  rightMenuActive!: boolean;

  rightMenuClick!: boolean;

  searchActive!: boolean;

  searchClick!: boolean;

  activeInlineProfile!: boolean;

  pinActive!: boolean;

  constructor(
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent
  ) {}

  onLayoutClick() {
    if (!this.topbarItemClick) {
      this.activeTopbarItem = null;
      this.topbarMenuActive = false;
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
      this.configActive$.next(false);
    }

    if (this.rightMenuActive && !this.rightMenuClick) {
      this.rightMenuActive$.next(false);
      this.rightMenuActive = false;
    }

    if (this.searchActive && !this.searchClick) {
      this.searchActive = false;
    }

    if (!this.menuClick) {
      if ((this.isSlim() || this.isHorizontal()) && !this.isMobile()) {
        this.menuService.reset();
        this.menuHoverActive = false;
      }

      if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
      }
    }

    this.configClick = false;
    this.rightMenuClick = false;
    this.searchClick = false;
    this.menuClick = false;
    this.topbarItemClick = false;
  }

  onSidebarClick() {
    this.menuClick = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onToggleMenu(event: any) {
    this.menuClick = true;

    if (this.overlayMenuActive) {
      this.overlayMenuActive = false;
    }

    if (this.sidebarActive) {
      this.sidebarStatic = !this.sidebarStatic;
    }

    event.preventDefault();
  }

  onSidebarMouseOver() {
    if (this.app.menuMode === 'sidebar' && !this.sidebarStatic) {
      this.sidebarActive$.next(this.isDesktop());
      this.sidebarActive = this.isDesktop();
      setTimeout(() => {
        this.pinActive = this.isDesktop();
      }, 200);
    }
  }

  onSidebarMouseLeave() {
    if (this.app.menuMode === 'sidebar' && !this.sidebarStatic) {
      setTimeout(() => {
        this.sidebarActive$.next(false);
        this.sidebarActive = false;
        this.pinActive = false;
      }, 250);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMenuButtonClick(event: any) {
    this.menuClick = true;

    if (this.isOverlay()) {
      this.overlayMenuActive = !this.overlayMenuActive;
    }

    if (this.isDesktop()) {
      this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
      this.staticMenuMobileActive = !this.staticMenuMobileActive;
    }

    event.preventDefault();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTopbarItemClick(event: any, item: any) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTopbarSubItemClick(event: any) {
    event.preventDefault();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRippleChange(event: any) {
    this.app.ripple = event.checked;
    this.primengConfig.ripple = event.checked;
  }

  onConfigClick() {
    this.configClick = true;
  }

  onRightMenuButtonClick() {
    this.rightMenuClick = true;
    this.rightMenuActive = true;
    this.rightMenuActive$.next(true);
  }

  onRightMenuClick() {
    this.rightMenuClick = true;
  }

  isStatic() {
    return this.app.menuMode === 'static';
  }

  isOverlay() {
    return this.app.menuMode === 'overlay';
  }

  isSlim() {
    return this.app.menuMode === 'slim';
  }

  isHorizontal() {
    return this.app.menuMode === 'horizontal';
  }

  isSidebar() {
    return this.app.menuMode === 'sidebar';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return window.innerWidth <= 991;
  }
}
