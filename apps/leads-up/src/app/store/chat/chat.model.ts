export class MessagesModel {
  messages: Message[] = [];
}

export interface Message {
  id: number;
  text: string;
}
