import axios from 'axios';

export default {
  emitEvent(namespace = 'default', path, method, eventType, data) {
    const headers = {
      'Content-Type': 'application/json'
      // 'event': eventType
    }
    const opts = {
      url: `/api/events${path}`,
      method,
      headers,
      data
    }
    return axios.request(opts);
  }
}
