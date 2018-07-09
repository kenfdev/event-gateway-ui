import Types from 'Types';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const epicMiddleware = createEpicMiddleware<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
>({
  dependencies: services
});

export const history = createBrowserHistory();

function configureStore(initialState?: object) {
  // configure middlewares
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  // create store
  return createStore(
    connectRouter(history)(rootReducer),
    initialState!,
    enhancer
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
