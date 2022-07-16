import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonDefault1Configuration } from './button-default.config';

@Component({
  selector: 'solu-dev-button-default1',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button-default1.component.html',
  styleUrls: ['./button-default1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDefault1Component
  extends ButtonDefault1Configuration
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
