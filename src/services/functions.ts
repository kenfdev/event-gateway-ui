import axios from 'axios';

export interface IFunctionsService {
  fetch(): Promise<any>;
}

export class FunctionsService implements IFunctionsService {
  fetch(namespace = 'default'): Promise<any> {
    return axios.get(`/api/config/v1/spaces/${namespace}/functions`).then(v => {
      console.log(v);
      return v.data;
    });
  }
}

export function makeFunctionsService(): IFunctionsService {
  return new FunctionsService();
}
