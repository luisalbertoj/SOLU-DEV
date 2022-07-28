import { Directive } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Directive()
export class ThemeConfig {
  menuMode = 'sidebar';

  layout = 'blue';

  theme = 'blue';

  ripple: boolean;

  colorScheme = 'dark';

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    this.ripple = true;
  }
}
