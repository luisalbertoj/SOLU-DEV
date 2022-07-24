import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextOneConfig } from './input-text-one.config';

@Component({
  selector: 'solu-dev-input-text-one',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
  templateUrl: './input-text-one.component.html',
  styleUrls: ['./input-text-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextOneComponent extends InputTextOneConfig {}
