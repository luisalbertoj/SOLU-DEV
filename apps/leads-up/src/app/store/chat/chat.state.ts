import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddMessage } from './chat.actions';
import { MessagesModel } from './chat.model';

@State({
  name: 'messages',
  defaults: {
    messages: [],
  },
})
export class MessagesState {
  @Selector()
  static getMessages(state: MessagesModel) {
    return state.messages;
  }

  @Action(AddMessage)
  add(
    { getState, patchState }: StateContext<MessagesModel>,
    { payload }: AddMessage
  ) {
    const state = getState();
    patchState({
      messages: [...state.messages, payload],
    });
  }
}
