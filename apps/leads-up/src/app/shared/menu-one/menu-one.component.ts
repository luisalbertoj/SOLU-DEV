import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';
import { InlineMenuOneComponent } from '../inline-menu-one/inline-menu-one.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'solu-dev-menu-one',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, InlineMenuOneComponent],
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOneComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public model!: any[];

  constructor(
    public app: AppComponent,
    public appMain: DashboardMenuOneComponent
  ) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Favorites',
        icon: 'pi pi-home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-fw pi-star',
        routerLink: ['/uikit'],
        items: [
          {
            label: 'Form Layout',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/uikit/formlayout'],
          },
          {
            label: 'Input',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/uikit/input'],
          },
          {
            label: 'Float Label',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/uikit/floatlabel'],
          },
          {
            label: 'Invalid State',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/uikit/invalidstate'],
          },
          {
            label: 'Button',
            icon: 'pi pi-fw pi-mobile',
            routerLink: ['/uikit/button'],
            class: 'rotated-icon',
          },
          {
            label: 'Table',
            icon: 'pi pi-fw pi-table',
            routerLink: ['/uikit/table'],
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/uikit/list'],
          },
          {
            label: 'Tree',
            icon: 'pi pi-fw pi-share-alt',
            routerLink: ['/uikit/tree'],
          },
          {
            label: 'Panel',
            icon: 'pi pi-fw pi-tablet',
            routerLink: ['/uikit/panel'],
          },
          {
            label: 'Overlay',
            icon: 'pi pi-fw pi-clone',
            routerLink: ['/uikit/overlay'],
          },
          {
            label: 'Media',
            icon: 'pi pi-fw pi-image',
            routerLink: ['/uikit/media'],
          },
          {
            label: 'Menu',
            icon: 'pi pi-fw pi-bars',
            routerLink: ['/uikit/menu'],
            preventExact: true,
          },
          {
            label: 'Message',
            icon: 'pi pi-fw pi-comment',
            routerLink: ['/uikit/message'],
          },
          {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            routerLink: ['/uikit/file'],
          },
          {
            label: 'Chart',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/uikit/charts'],
          },
          {
            label: 'Misc',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/uikit/misc'],
          },
        ],
      },
      {
        label: 'Utilities',
        icon: 'pi pi-fw pi-compass',
        routerLink: ['/utilities'],
        items: [
          {
            label: 'PrimeIcons',
            icon: 'pi pi-fw pi-prime',
            routerLink: ['utilities/icons'],
          },
          {
            label: 'PrimeFlex',
            icon: 'pi pi-fw pi-desktop',
            url: ['https://www.primefaces.org/primeflex/'],
            target: '_blank',
          },
        ],
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/pages/crud'],
          },
          {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: ['/pages/calendar'],
          },
          {
            label: 'Timeline',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/pages/timeline'],
          },
          {
            label: 'Landing',
            icon: 'pi pi-fw pi-globe',
            url: 'assets/pages/landing.html',
            target: '_blank',
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: ['/login'],
          },
          {
            label: 'Invoice',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/pages/invoice'],
          },
          {
            label: 'Help',
            icon: 'pi pi-fw pi-question-circle',
            routerLink: ['/pages/help'],
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            routerLink: ['/error'],
          },
          {
            label: 'Not Found',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/notfound'],
          },
          {
            label: 'Access Denied',
            icon: 'pi pi-fw pi-lock',
            routerLink: ['/access'],
          },
          {
            label: 'Empty',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/pages/empty'],
          },
        ],
      },
      {
        label: 'Hierarchy',
        icon: 'pi pi-fw pi-align-left',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
                ],
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
                ],
              },
            ],
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
                ],
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Start',
        icon: 'pi pi-fw pi-download',
        items: [
          {
            label: 'Buy Now',
            icon: 'pi pi-fw pi-shopping-cart',
            url: ['https://www.primefaces.org/store'],
          },
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: ['/documentation'],
          },
        ],
      },
    ];
  }
}
