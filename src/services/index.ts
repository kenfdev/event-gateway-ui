import * as uuid from 'uuid';
import { makeFunctionsService } from './functions';
import { makeEventTypesService } from './eventtypes';

const functions = makeFunctionsService();
const eventtypes = makeEventTypesService();

export default {
  functions,
  eventtypes,
  uuid
};
