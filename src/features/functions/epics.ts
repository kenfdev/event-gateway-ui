import Types from 'Types';
import { fetchFunctions, createFunction, deleteFunction } from './actions';
import { layoutActions } from '../layout';
import { combineEpics, Epic } from 'redux-observable';
import {
  filter,
  switchMap,
  map,
  catchError,
  flatMap,
  take,
  startWith,
  takeUntil
} from 'rxjs/operators';
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
> = (action$, store, { functions, uuid }) =>
  action$.pipe(
    filter(isActionOf(deleteFunction.request)),
    switchMap(reqAction => {
      const modalId = uuid.v4();
      return action$.pipe(
        filter(isActionOf(layoutActions.confirmAction)),
        filter(({ payload }) => payload.id === modalId),
        take(1),
        switchMap(a =>
          from(
            functions.delete(reqAction.payload).then(v => {
              const { functionId, space = 'default' } = reqAction.payload;
              return {
                functionId,
                space
              };
            })
          ).pipe(
            flatMap(v => {
              return concat(
                of(deleteFunction.success(v)),
                of(layoutActions.closeModal({ id: modalId }))
              );
            }),
            catchError(err => of(deleteFunction.failure(err)))
          )
        ),
        takeUntil(action$.pipe(filter(isActionOf(layoutActions.closeModal)))),
        startWith(
          layoutActions.openConfirmModal({
            id: modalId,
            text: 'Are you Sure?',
            type: 'confirmation'
          })
        )
      );
    })
  );

export default combineEpics(
  fetchFunctionsFlow,
  createFunctionFlow,
  deleteFunctionFlow
);
