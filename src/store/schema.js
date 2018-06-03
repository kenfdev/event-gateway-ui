import {schema} from 'normalizr';

export const fnSchema = new schema.Entity('functions', {}, {idAttribute: 'functionId'});
export const fnListSchema = [fnSchema];

export const subscriptionSchema = new schema.Entity('subscriptions', {}, {idAttribute: 'subscriptionId'});
export const subscriptionListSchema = [subscriptionSchema];
