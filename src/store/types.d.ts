import { StateType } from 'typesafe-actions';
import { routerActions } from 'connected-react-router';

import { FunctionsAction } from '../features/functions';
import rootReducer from './root-reducer';
import { ActionType } from 'typesafe-actions';

export type ReactRouterAction = ActionType<typeof routerActions>;

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = FunctionsAction | ReactRouterAction;
}
