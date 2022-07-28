import { Directive, Input } from '@angular/core';

@Directive()
export default class ToastConfig {
  @Input() protected config!: {
    key: string;
    severity: string;
    summary: string;
    detail: string;
  };
}
