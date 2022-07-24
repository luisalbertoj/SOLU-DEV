import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonOneConfig } from './button-one.config';

@Component({
  selector: 'solu-dev-button-one',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button-one.component.html',
  styleUrls: ['./button-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonOneComponent extends ButtonOneConfig {}
