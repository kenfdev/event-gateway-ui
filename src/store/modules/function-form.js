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

const actions = {
  setFunctionId({ commit }, functionId) {
    commit('setFunctionId', { functionId });
  },
  setType({ commit }, type) {
    commit('setType', { type })
  },
  setProviderUrl({ commit }, providerUrl) {
    commit('setProviderUrl', { providerUrl })
  }
}

const mutations = {
  setFunctionId(state, { functionId }) {
    state.form.functionId = functionId;
  },
  setType(state, { type }) {
    state.form.type = type;
  },
  setProviderUrl(state, { providerUrl }) {
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
