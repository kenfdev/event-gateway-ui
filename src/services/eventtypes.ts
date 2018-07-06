import axios from 'axios';
import { EGEventType } from '../models/eventtype';

export interface IEventTypesService {
  fetch(data?: { space: string }): Promise<EGEventType[]>;
  create(data: EGEventType): Promise<EGEventType>;
}

export class EventTypesService implements IEventTypesService {
  fetch(data: { space?: string } = {}): Promise<EGEventType[]> {
    const space = data.space || 'default';
    return axios.get(`/api/config/v1/spaces/${space}/eventtypes`).then(v => {
      return v.data;
    });
  }
  create(data: EGEventType): Promise<EGEventType> {
    const space = data.space || 'default';
    return axios
      .post(`/api/config/v1/spaces/${space}/eventtypes`, data)
      .then(v => v.data);
  }
}

export function makeEventTypesService(): IEventTypesService {
  return new EventTypesService();
}
