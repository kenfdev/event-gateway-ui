import { combineEpics } from 'redux-observable';

import functions from '../features/functions/epics';
export default combineEpics(functions);
