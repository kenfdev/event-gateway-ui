import { FunctionsState } from './reducer';

export const getFunctions = (state: FunctionsState) => state.functions;

export const getViewableFunctions = (state: FunctionsState) => {
  // FIXME: performance hit. need to fix this
  return state.functions.map(f => {
    let selected = true;
    if (state.selectedFunctionIds.indexOf(f.functionId) < 0) {
      selected = false;
    }
    return { ...f, selected };
  });
};
