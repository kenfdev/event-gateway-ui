import axios from 'axios';

export default {
  getFunctions(namespace) {
    return axios.get(`/api/config/v1/spaces/${namespace}/functions`);
  },
  createFunction(namespace, data) {
    return axios.post(`/api/config/v1/spaces/${namespace}/functions`, data);
  },
  deleteFunction(namespace, id) {
    return axios.delete(`/api/config/v1/spaces/${namespace}/functions/${id}`);
  },
  getEventTypes(namespace) {
    return axios.get(`/api/config/v1/spaces/${namespace}/eventtypes`);
  },
  createEventType(namespace, data) {
    return axios.post(`/api/config/v1/spaces/${namespace}/eventtypes`, data);
  },
  deleteEventType(namespace, id) {
    return axios.delete(`/api/config/v1/spaces/${namespace}/eventtypes/${id}`);
  },
  getSubscription(namespace, id) {
    return axios.get(`/api/config/v1/spaces/${namespace}/subscriptions/${id}`);
  },
  getSubscriptions(namespace) {
    return axios.get(`/api/config/v1/spaces/${namespace}/subscriptions`);
  },
  createSubscription(namespace, data) {
    return axios.post(`/api/config/v1/spaces/${namespace}/subscriptions`, data);
  },
  deleteSubscription(namespace, id) {
    return axios.delete(
      `/api/config/v1/spaces/${namespace}/subscriptions/${id}`
    );
  }
};
