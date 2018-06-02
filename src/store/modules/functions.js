import config from '../../api/config';

const state = {
  all: []
}

const getters = {
  all: state => state.all
}

const SET_FUNCTIONS = 'SET_FUNCTIONS'
const ADD_FUNCTION = 'ADD_FUNCTION'

const actions = {
  getAll({commit}) {
    config
      .getFunctions()
      .then(res => {
        commit(SET_FUNCTIONS, {functions: res.data.functions});
      })
  },
  create({ commit }, payload) {
    config
      .createFunction(payload.namespace, payload.data)
      .then(res => {
        commit(ADD_FUNCTION, {function: res.data})
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
