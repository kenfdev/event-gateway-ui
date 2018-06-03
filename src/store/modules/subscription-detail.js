import Vue from 'vue';
import events from '../../api/events';

const state = {
  requestJson: {},
  response: {}
}

const getters = {
  getRequestJson: (state) => state.requestJson,
  getResponse: (state) => state.response
}

const SET_REQ_JSON = 'SET_REQ_JSON'
const SET_RESPONSE = 'SET_RESPONSE'

const actions = {
  setReqJson({
    commit
  }, req) {
    commit(SET_REQ_JSON, {req})
  },
  setResponse({
    commit
  }, response) {
    commit(SET_RESPONSE, {response})
  },
  invoke({
    commit
  }, {namespace, subscription, requestJson}) {
    events
      .emitEvent(namespace, subscription.path, subscription.method, subscription.event, requestJson)
      .then(res => commit(SET_RESPONSE, {response: res}))
  }
}

const mutations = {
  [SET_REQ_JSON](state, {req}) {
    Vue.set(state, 'requestJson', req);
  },
  [SET_RESPONSE](state, {response}) {
    Vue.set(state, 'response', response);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
