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
      default:
        return state;
    }
  },
  selectedFunctionIds: (state = [], action) => {
    switch (action.type) {
      case getType(functions.selectFunction):
        // FIXME: not implemented
        return [action.payload];
      default:
        return state;
    }
  }
});
