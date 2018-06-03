// import config from '../../api/config';

const state = {
  form: {
    functionId: '',
    type: '',
    provider: {
      url: ''
    }
  }
}

const getters = {
  getForm: (state) => state.form
}

const SET_FUNCTION_ID = 'SET_FUNCTION_ID'
const SET_TYPE = 'SET_TYPE'
const SET_PROVIDER_URL = 'SET_PROVIDER_URL'

const actions = {
  setFunctionId({ commit }, functionId) {
    commit(SET_FUNCTION_ID, { functionId });
  },
  setType({ commit }, type) {
    commit(SET_TYPE, { type })
  },
  setProviderUrl({ commit }, providerUrl) {
    commit(SET_PROVIDER_URL, { providerUrl })
  }
}

const mutations = {
  [SET_FUNCTION_ID](state, { functionId }) {
    state.form.functionId = functionId;
  },
  [SET_TYPE](state, { type }) {
    state.form.type = type;
  },
  [SET_PROVIDER_URL](state, { providerUrl }) {
    state.form.provider.url = providerUrl;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
