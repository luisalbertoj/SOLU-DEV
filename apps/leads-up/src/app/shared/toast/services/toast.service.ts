import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class ToastService {
  constructor(private _messageService: MessageService) {}
  public open(config: { severity: string; summary: string; detail: string }) {
    this._messageService.add(config);
  }
  public close() {
    this._messageService.clear();
  }
}
