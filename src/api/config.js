import axios from 'axios';

export default {
  getFunctions(namespace = 'default') {
    return axios.get(`/api/config/v1/spaces/${namespace}/functions`);
  },
  createFunction(namespace = 'default', data) {
    return axios.post(`/api/config/v1/spaces/${namespace}/functions`, data);
  }
}
