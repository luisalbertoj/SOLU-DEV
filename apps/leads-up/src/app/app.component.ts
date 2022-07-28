import { Component } from '@angular/core';
import { ThemeConfig } from './theme.config';

@Component({
  selector: 'solu-dev-root',
  template: `<router-outlet></router-outlet>
    <solu-dev-toast></solu-dev-toast> `,
})
export class AppComponent extends ThemeConfig {}
