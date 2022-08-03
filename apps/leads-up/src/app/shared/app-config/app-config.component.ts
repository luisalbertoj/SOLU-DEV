import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Subscription } from 'rxjs';
import { AppComponent } from '../../app.component';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';
import { AppConfig } from './model/app-config';
import { ConfigService } from './services/app.config.service';

@Component({
  selector: 'solu-dev-app-config',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioButtonModule, InputSwitchModule],
  providers: [ConfigService],
  templateUrl: './app-config.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppConfigComponent implements OnInit {
  layoutColors!: { name: string; color: string }[];

  themeColors!: { name: string; color: string }[];

  config!: AppConfig;

  subscription!: Subscription;

  constructor(
    public appMain: DashboardMenuOneComponent,
    public app: AppComponent,
    public configService: ConfigService
  ) {}

  ngOnInit() {
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
      this.config = config;
    });

    this.themeColors = [
      { name: 'blue', color: '#0F8BFD' },
      { name: 'green', color: '#0BD18A' },
      { name: 'magenta', color: '#EC4DBC' },
      { name: 'orange', color: '#FD9214' },
      { name: 'purple', color: '#873EFE' },
      { name: 'red', color: '#FC6161' },
      { name: 'teal', color: '#00D0DE' },
      { name: 'yellow', color: '#EEE500' },
    ];

    this.layoutColors = [
      { name: 'blue', color: '#0F8BFD' },
      { name: 'green', color: '#0BD18A' },
      { name: 'magenta', color: '#EC4DBC' },
      { name: 'orange', color: '#FD9214' },
      { name: 'purple', color: '#873EFE' },
      { name: 'red', color: '#FC6161' },
      { name: 'teal', color: '#00D0DE' },
      { name: 'yellow', color: '#EEE500' },
    ];
  }

  changeColorScheme(scheme: string) {
    this.changeStyleSheetsColor('layout-css', 'layout-' + scheme + '.css', 1);
    this.changeStyleSheetsColor('theme-css', 'theme-' + scheme + '.css', 1);

    this.app.colorScheme = scheme;
    this.configService.updateConfig({
      ...this.config,
      ...{ dark: scheme === 'dark' },
    });
  }

  changeStyleSheetsColor(id: string, value: string, from: number) {
    const element = document.getElementById(id);
    const urlTokens = element?.getAttribute('href')?.split('/');
    if (!urlTokens) {
      return;
    }
    if (from === 1) {
      // which function invoked this function - change scheme
      urlTokens[urlTokens.length - 1] = value;
    } else if (from === 2) {
      // which function invoked this function - change color
      urlTokens[urlTokens.length - 2] = value;
    }

    const newURL = urlTokens?.join('/');

    this.replaceLink(element, newURL);
  }

  changeTheme(theme: string) {
    const themeLink: HTMLLinkElement = document.getElementById(
      'theme-css'
    ) as HTMLLinkElement;
    const href =
      'assets/theme/' + theme + '/theme-' + this.app.colorScheme + '.css';
    this.app.theme = theme;

    this.replaceLink(themeLink, href);
  }

  changeLayout(layout: string) {
    const layoutLink: HTMLLinkElement = document.getElementById(
      'layout-css'
    ) as HTMLLinkElement;
    const href =
      'assets/layout/css/' +
      layout +
      '/layout-' +
      this.app.colorScheme +
      '.css';
    this.app.layout = layout;

    this.replaceLink(layoutLink, href);
  }

  isIE() {
    return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replaceLink(linkElement: any, href: string) {
    if (this.isIE()) {
      linkElement.setAttribute('href', href);
    } else {
      const id = linkElement.getAttribute('id');
      const cloneLinkElement = linkElement.cloneNode(true);

      cloneLinkElement.setAttribute('href', href);
      cloneLinkElement.setAttribute('id', id + '-clone');

      linkElement.parentNode.insertBefore(
        cloneLinkElement,
        linkElement.nextSibling
      );

      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', id);
      });
    }
  }

  onConfigButtonClick(event: Event) {
    this.appMain.configActive = !this.appMain.configActive;
    this.appMain.configActive$.next(true);
    this.appMain.configClick = true;
    event.preventDefault();
  }
}
