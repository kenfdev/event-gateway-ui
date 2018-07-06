import axios from 'axios';

export interface IFunctionsService {
  fetch(data?: { space: string }): Promise<EGFunction[]>;
  create(data: EGFunction): Promise<EGFunction>;
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
}

export function makeFunctionsService(): IFunctionsService {
  return new FunctionsService();
}
