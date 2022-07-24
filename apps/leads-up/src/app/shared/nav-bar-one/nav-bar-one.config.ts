import { Directive, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Directive()
export class NabBarOneConfig {
  /**
   * Items Of menu
   */
  @Input() items: MenuItem[] = [];
  /**
   * url of logo
   */
  @Input() logo?: string;
  /**
   * height of image logo
   */
  @Input() height?: string;
}
