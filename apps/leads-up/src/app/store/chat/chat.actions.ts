import { Message } from './chat.model';

export class AddMessage {
  static readonly type = '[POSTS] Add';
  constructor(public payload: Message) {}
}
