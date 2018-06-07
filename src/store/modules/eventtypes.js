import Vue from 'vue';
import {eventTypeListSchema, eventTypeSchema} from '../schema';
import {normalize} from 'normalizr';
import config from '../../api/config';

const state = {
  allById: [],
  entities: {}
}

const getters = {
  all: state => state
    .allById
    .map(id => state.entities[id]),
  allNames: (state, getters) => getters.all.map(fn => fn.name)
}

const SET_EVENTTYPES = 'SET_EVENTTYPES';
const ADD_EVENTTYPE = 'ADD_EVENTYPE';
const DELETE_EVENTTYPE = 'DELETE_EVENTTYPE';

const actions = {
  getAll({
    commit
  }, payload) {
    config
      .getEventTypes(payload.namespace)
      .then(res => {
        const result = normalize(res.data.eventTypes, eventTypeListSchema);
        commit(SET_EVENTTYPES, result);
      })
  },
  create({
    commit
  }, payload) {
    config
      .createEventType(payload.namespace, payload.data)
      .then(res => {
        const result = normalize(res.data, eventTypeSchema);
        commit(ADD_EVENTTYPE, result);
      })
  },
  delete({
    commit
  }, payload) {
    config
      .deleteEventType(payload.namespace, payload.id)
      .then(() => {
        commit(DELETE_EVENTTYPE, {id: payload.id});
      })
  }
}

const mutations = {
  [SET_EVENTTYPES](state, {result, entities}) {
    Vue.set(state, 'allById', result);
    Vue.set(state, 'entities', entities.eventTypes);
  },
  [ADD_EVENTTYPE](state, {result, entities}) {
    const entity = result[0];
    const allById = [
      entity, ...state.allById
    ];
    Vue.set(state, 'allById', allById);
    Vue.set(state.entities, entity.name, entity);
  },
  [DELETE_EVENTTYPE](state, {id: deletedId}) {
    const newAllById = state
      .allById
      .filter(id => id !== deletedId);
    Vue.set(state, 'allById', newAllById);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
