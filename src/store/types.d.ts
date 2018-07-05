import { StateType } from 'typesafe-actions';
// import { CountersAction } from '../features/counters';
import { FunctionsAction } from '../features/functions';
import rootReducer from './root-reducer';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = FunctionsAction;
}
