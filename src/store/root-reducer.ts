import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { functionsReducer } from '../features/functions';

const rootReducer = combineReducers({
  functions: functionsReducer,
  form: formReducer
});

export default rootReducer;
