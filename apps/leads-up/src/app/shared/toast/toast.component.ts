import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import ToastConfig from './toast.config';

@Component({
  selector: 'solu-dev-toast',
  standalone: true,
  imports: [CommonModule, ToastModule],
  providers: [],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent extends ToastConfig {}
