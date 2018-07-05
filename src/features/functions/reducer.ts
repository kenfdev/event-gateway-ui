import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as functions from './actions';
import { EGFunction } from './models';

export type FunctionsState = {
  readonly functions: EGFunction[];
};

export type FunctionsAction = ActionType<typeof functions>;

export default combineReducers<FunctionsState, FunctionsAction>({
  functions: (state = [], action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
});
