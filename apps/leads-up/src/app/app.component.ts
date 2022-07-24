import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'solu-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuMode = 'sidebar';

  layout = 'blue';

  theme = 'blue';

  ripple: boolean;

  colorScheme = 'dark';

  constructor(private primengConfig: PrimeNGConfig) {
    this.ripple = true;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.ripple = true;
  }
}
