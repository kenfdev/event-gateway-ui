// import config from '../../api/config';

const state = {
  form: {
    subscriptionId: '',
    type: '',
    eventType: '',
    functionId: '',
    path: '',
    method: ''
  }
}

const getters = {
  getForm: (state) => state.form
}

const SET_TYPE = 'SET_TYPE'
const SET_EVENT_TYPE = 'SET_EVENT_TYPE'
const SET_FUNCTION_ID = 'SET_FUNCTION_ID'
const SET_PATH = 'SET_PATH'
const SET_METHOD = 'SET_METHOD'

const actions = {
  setType({
    commit
  }, type) {
    commit(SET_TYPE, {type})
  },
  setEventType({
    commit
  }, eventType) {
    commit(SET_EVENT_TYPE, {eventType})
  },
  setFunctionId({
    commit
  }, functionId) {
    commit(SET_FUNCTION_ID, {functionId})
  },
  setPath({
    commit
  }, path) {
    commit(SET_PATH, {path})
  },
  setMethod({
    commit
  }, method) {
    commit(SET_METHOD, {method})
  }
}

const mutations = {
  [SET_TYPE](state, {type}) {
    state.form.type = type;
  },
  [SET_EVENT_TYPE](state, {eventType}) {
    state.form.eventType = eventType;
  },
  [SET_FUNCTION_ID](state, {functionId}) {
    state.form.functionId = functionId;
  },
  [SET_PATH](state, {path}) {
    state.form.path = path;
  },
  [SET_METHOD](state, {method}) {
    state.form.method = method;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
