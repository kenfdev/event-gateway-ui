import { createAsyncAction } from 'typesafe-actions';
import { EGFunction } from './models';

export const fetchFunctions = createAsyncAction(
  'FETCH_FUNCTIONS_REQUEST',
  'FETCH_FUNCTIONS_SUCCESS',
  'FETCH_FUNCTIONS_FAILURE'
)<void, EGFunction[], Error>();
