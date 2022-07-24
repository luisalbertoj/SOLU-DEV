import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { NabBarOneConfig } from './nav-bar-one.config';

@Component({
  selector: 'solu-dev-nav-bar-one',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './nav-bar-one.component.html',
  styleUrls: ['./nav-bar-one.component.css'],
})
export class NavBarOneComponent extends NabBarOneConfig {
  constructor() {
    super();
  }
}
