import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddMessage } from './store/chat/chat.actions';
import { Message, MessagesModel } from './store/chat/chat.model';

@Component({
  selector: 'solu-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message: Message = {} as Message;
  constructor(private _store: Store) {
  }

  sendMessage() {
    this.message.id = this.getRndInteger(1, 100);
    this._store.dispatch(new AddMessage(this.message));
  }
  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
