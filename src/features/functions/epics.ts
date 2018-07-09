import Types from 'Types';
import { fetchFunctions, createFunction, deleteFunction } from './actions';
import { combineEpics, Epic } from 'redux-observable';
import { filter, switchMap, map, catchError, flatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of, concat } from 'rxjs';
import { routerActions } from 'connected-react-router';

const fetchFunctionsFlow: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store, { functions }) =>
  action$.pipe(
    filter(isActionOf(fetchFunctions.request)),
    switchMap(action =>
      from(functions.fetch(action.payload)).pipe(
        map(fetchFunctions.success),
        catchError(err => of(fetchFunctions.failure(err)))
      )
    )
  );

const createFunctionFlow: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store, { functions }) =>
  action$.pipe(
    filter(isActionOf(createFunction.request)),
    switchMap(action =>
      from(functions.create(action.payload)).pipe(
        flatMap(v => {
          return concat(
            of(createFunction.success(v)),
            of(routerActions.push('/functions'))
          );
        }),
        catchError(err => of(createFunction.failure(err)))
      )
    )
  );

const deleteFunctionFlow: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store, { functions }) =>
  action$.pipe(
    filter(isActionOf(deleteFunction.request)),
    switchMap(action =>
      from(
        functions.delete(action.payload).then(v => {
          const { functionId, space = 'default' } = action.payload;
          return {
            functionId,
            space
          };
        })
      ).pipe(
        map(deleteFunction.success),
        catchError(err => of(deleteFunction.failure(err)))
      )
    )
  );

export default combineEpics(
  fetchFunctionsFlow,
  createFunctionFlow,
  deleteFunctionFlow
);
