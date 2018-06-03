import Vue from 'vue';
import {fnSchema, fnListSchema} from '../schema';
import {normalize} from 'normalizr';
import config from '../../api/config';

const state = {
  allById: [],
  entities: {}
}

const getters = {
  all: state => state
    .allById
    .map(id => state.entities[id])
}

const SET_FUNCTIONS = 'SET_FUNCTIONS'
const ADD_FUNCTION = 'ADD_FUNCTION'

const actions = {
  getAll({commit}) {
    config
      .getFunctions()
      .then(res => {
        const result = normalize(res.data.functions, fnListSchema);
        commit(SET_FUNCTIONS, result);
      })
  },
  create({
    commit
  }, payload) {
    config
      .createFunction(payload.namespace, payload.data)
      .then(res => {
        const result = normalize(res.data, fnSchema);
        commit(ADD_FUNCTION, result);
      })
  }
}

const mutations = {
  [SET_FUNCTIONS](state, {result, entities}) {
    Vue.set(state, 'allById', result);
    Vue.set(state, 'entities', entities.functions);
  },
  [ADD_FUNCTION](state, {result, entities}) {
    const entity = result[0]
    const allById = [
      entity, ...state.allById
    ]
    Vue.set(state, 'allById', allById);
    Vue.set(state.entities, entity.id, entity);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
