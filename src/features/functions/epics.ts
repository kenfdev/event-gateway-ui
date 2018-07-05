import Types from 'Types';
import { fetchFunctions } from './actions';
import { combineEpics, Epic } from 'redux-observable';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, pipe, of } from 'rxjs';

export const fetchFunctionsFlow: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store, { functions }) =>
  action$.pipe(
    filter(isActionOf(fetchFunctions.request)),
    switchMap(action =>
      from(functions.fetch()).pipe(
        map(fetchFunctions.success),
        catchError(
          pipe( fetchFunctions.failure, of)))
    )
  );

export default combineEpics(fetchFunctionsFlow);
