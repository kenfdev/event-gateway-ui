import axios from 'axios';

import { EGFunction } from '../models/function';

export interface IFunctionsService {
  fetch(data?: { space: string }): Promise<EGFunction[]>;
  create(data: EGFunction): Promise<EGFunction>;
  delete(data: { functionId: string; space?: string }): Promise<any>;
}

export class FunctionsService implements IFunctionsService {
  fetch(data: { space?: string } = {}): Promise<EGFunction[]> {
    const space = data.space || 'default';
    return axios.get(`/api/config/v1/spaces/${space}/functions`).then(v => {
      // FIXME: type
      return v.data.functions;
    });
  }
  create(data: EGFunction): Promise<EGFunction> {
    const space = data.space || 'default';
    return axios
      .post(`/api/config/v1/spaces/${space}/functions`, data)
      .then(v => v.data);
  }
  delete(data: { functionId: string; space?: string }): Promise<any> {
    const space = data.space || 'default';
    return axios.delete(
      `/api/config/v1/spaces/${space}/functions/${data.functionId}`
    );
  }
}

export function makeFunctionsService(): IFunctionsService {
  return new FunctionsService();
}
