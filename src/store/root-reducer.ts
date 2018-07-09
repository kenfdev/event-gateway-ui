import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { functionsReducer } from '../features/functions';
import { layoutReducer } from '../features/layout';

const rootReducer = combineReducers({
  layout: layoutReducer,
  functions: functionsReducer,
  form: formReducer
});

export default rootReducer;
