import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class InputTextOneConfig {
  @Input() model!: string;
  @Output() modelChange = new EventEmitter();

  modelChangeData(data: string) {
    this.modelChange.emit(data);
  }
}
