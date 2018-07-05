import { combineReducers } from 'redux';

import { functionsReducer } from '../features/functions';

const rootReducer = combineReducers({
  functions: functionsReducer,
});

export default rootReducer;
