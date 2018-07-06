// https://github.com/serverless/event-gateway/blob/master/docs/api.md#event-types
export interface EGEventType {
  /**
   * event type name
   */
  name: string;
  /**
   *  space name
   */
  space?: string;
  /**
   * authorizer function ID
   */
  authorizerId?: string;
  /**
   * arbitrary metadata
   */
  metadata?: any;
}
