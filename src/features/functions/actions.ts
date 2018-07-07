import { createAsyncAction, createAction } from 'typesafe-actions';
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

export type DeleteRequest = {
  functionId: string;
  space?: string;
};
export type DeleteResponse = {
  functionId: string;
  space?: string;
};
export const deleteFunction = createAsyncAction(
  'DELETE_FUNCTION_REQUEST',
  'DELETE_FUNCTION_SUCCESS',
  'DELETE_FUNCTION_FAILURE'
)<DeleteRequest, DeleteResponse, Error>();

export const selectFunction = createAction('SELECT_FUNCTION', resolve => {
  return (functionId: string) => resolve(functionId);
});
