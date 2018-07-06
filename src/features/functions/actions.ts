import { createAsyncAction } from 'typesafe-actions';
import { ViewableEGFunction } from './models';

export const fetchFunctions = createAsyncAction(
  'FETCH_FUNCTIONS_REQUEST',
  'FETCH_FUNCTIONS_SUCCESS',
  'FETCH_FUNCTIONS_FAILURE'
)<{ space: string }, ViewableEGFunction[], Error>();

export const createFunction = createAsyncAction(
  'CREATE_FUNCTION_REQUEST',
  'CREATE_FUNCTION_SUCCESS',
  'CREATE_FUNCTION_FAILURE'
)<ViewableEGFunction, ViewableEGFunction, Error>();
