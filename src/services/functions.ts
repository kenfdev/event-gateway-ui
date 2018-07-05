export interface IFunctionsService {
  fetch(): Promise<any>;
}

export class FunctionsService implements IFunctionsService {
  fetch(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

export function makeFunctionsService(): IFunctionsService {
  return new FunctionsService();
}
