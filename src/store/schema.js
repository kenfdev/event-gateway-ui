import {schema} from 'normalizr';

export const fnSchema = new schema.Entity('functions', {}, {idAttribute: 'functionId'});
export const fnListSchema = [fnSchema];

export const eventTypeSchema = new schema.Entity('eventTypes', {}, {idAttribute: 'name'});
export const eventTypeListSchema = [eventTypeSchema];

export const subscriptionSchema = new schema.Entity('subscriptions', {}, {idAttribute: 'subscriptionId'});
export const subscriptionListSchema = [subscriptionSchema];
