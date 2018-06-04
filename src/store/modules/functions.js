import Vue from 'vue';
import { fnSchema, fnListSchema } from '../schema';
import { normalize } from 'normalizr';
import config from '../../api/config';

const state = {
  allById: [],
  entities: {}
};

const getters = {
  all: state => state.allById.map(id => state.entities[id]),
  allNames: (state, getters) => getters.all.map(fn => fn.functionId)
};

const SET_FUNCTIONS = 'SET_FUNCTIONS';
const ADD_FUNCTION = 'ADD_FUNCTION';
const DELETE_FUNCTION = 'DELETE_FUNCTION';

const actions = {
  getAll({ commit }, payload) {
    config.getFunctions(payload.namespace).then(res => {
      const result = normalize(res.data.functions, fnListSchema);
      commit(SET_FUNCTIONS, result);
    });
  },
  create({ commit }, payload) {
    config.createFunction(payload.namespace, payload.data).then(res => {
      const result = normalize(res.data, fnSchema);
      commit(ADD_FUNCTION, result);
    });
  },
  delete({ commit }, payload) {
    config.deleteFunction(payload.namespace, payload.id).then(() => {
      commit(DELETE_FUNCTION, { id: payload.id });
    });
  }
};

const mutations = {
  [SET_FUNCTIONS](state, { result, entities }) {
    Vue.set(state, 'allById', result);

    let fns = {};
    if (entities && entities.functions) {
      fns = entities.functions;
    }
    Vue.set(state, 'entities', fns);
  },
  [ADD_FUNCTION](state, { result, entities }) {
    const id = result;
    const allById = [id, ...state.allById];
    Vue.set(state, 'allById', allById);
    Vue.set(state.entities, id, entities.functions[id]);
  },
  [DELETE_FUNCTION](state, { id: deletedId }) {
    const newAllById = state.allById.filter(id => id !== deletedId);
    Vue.set(state, 'allById', newAllById);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
