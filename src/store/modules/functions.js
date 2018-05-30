import config from '../../api/config';

const state = {
  all: []
}

const getters = {
  all: state => state.all
}

const actions = {
  getAll({commit}) {
    config
      .getFunctions()
      .then(res => {
        commit('setFunctions', {functions: res.data.functions});
      })
  },
  create({ commit }, payload) {
    config
      .createFunction(payload.namespace, payload.data)
      .then(res => {
        commit('addFunction', {function: res.data})
      })
  }
}

const mutations = {
  setFunctions(state, { functions }) {
    state.all = functions;
  },
  addFunction(state, { func }) {
    state.all = [
      func, ...state.all
    ];
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
