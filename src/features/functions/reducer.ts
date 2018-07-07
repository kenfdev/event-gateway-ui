import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as functions from './actions';
import { ViewableEGFunction } from './models';

export type FunctionsState = {
  readonly functions: ViewableEGFunction[];
  readonly selectedFunctionIds: string[];
};

export type FunctionsAction = ActionType<typeof functions>;

export default combineReducers<FunctionsState, FunctionsAction>({
  functions: (state = [], action) => {
    switch (action.type) {
      case getType(functions.fetchFunctions.success):
        return action.payload;
      case getType(functions.createFunction.success):
        return [action.payload, ...state];
      case getType(functions.deleteFunction.success):
        const { functionId, space } = action.payload;
        const deleted = state.filter(
          v => !(v.functionId === functionId && v.space === space)
        );
        return deleted;
      default:
        return state;
    }
  },
  selectedFunctionIds: (state = [], action) => {
    switch (action.type) {
      case getType(functions.selectFunction):
        let selected = [];
        const index = state.indexOf(action.payload);
        if (index < 0) {
          selected = [...state, action.payload];
        } else {
          selected = [...state.slice(0, index), ...state.slice(index + 1)];
        }
        return selected;
      default:
        return state;
    }
  }
});
