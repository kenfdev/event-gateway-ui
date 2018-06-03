import axios from 'axios';

export default {
  getFunctions(namespace = 'default') {
    return axios.get(`/api/config/v1/spaces/${namespace}/functions`);
  },
  createFunction(namespace = 'default', data) {
    return axios.post(`/api/config/v1/spaces/${namespace}/functions`, data);
  },
  getSubscription(namespace = 'default', id) {
    return axios.get(`/api/config/v1/spaces/${namespace}/subscriptions/${id}`);
  },
  getSubscriptions(namespace = 'default') {
    return axios.get(`/api/config/v1/spaces/${namespace}/subscriptions`);
  },
  createSubscription(namespace = 'default', data) {
    return axios.post(`/api/config/v1/spaces/${namespace}/subscriptions`, {
      type: data.type,
      event: data.eventType,
      functionId: data.functionId,
      path: data.path,
      method: data.method
    });
  }
}
