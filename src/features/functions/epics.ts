import Types from 'Types';
import { fetchFunctions } from './actions';
import { combineEpics, Epic } from 'redux-observable';
import { ignoreElements, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

export const fetchFunctionsFlow: Epic<
  Types.RootAction,
  null,
  Types.RootState,
  Types.Services
> = (action$, store, { functions }) =>
  action$.pipe(
    filter(isOfType(fetchFunctions.request)),
    ignoreElements()
  );
