import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class InputTextOneConfig {
  @Input() model!: string;
  @Input() name!: string;
  @Input() type!: string;
  @Input() autocomplete!: string;
  @Input() placeholder!: string;
  @Input() required!: boolean;
  @Input() autofocus!: boolean;
  @Output() modelChange = new EventEmitter();

  modelChangeData(data: string) {
    this.modelChange.emit(data);
  }
}
