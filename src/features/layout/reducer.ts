import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as layouts from './actions';

export type LayoutState = {
  readonly modals: layouts.ModalRequest[];
};

export type LayoutAction = ActionType<typeof layouts>;

export default combineReducers<LayoutState, LayoutAction>({
  modals: (state = [], action) => {
    switch (action.type) {
      case getType(layouts.openConfirmModal):
        return [...state, action.payload];
      case getType(layouts.closeModal):
        return state.filter(m => m.id !== action.payload.id);
      default:
        return state;
    }
  }
});
