import Vue from 'vue';
import { normalize } from 'normalizr';
import { subscriptionSchema, subscriptionListSchema } from '../schema';
import config from '../../api/config';

const state = {
  allById: [],
  entities: {},
  selectedId: null
};

const getters = {
  all: state => state.allById.map(id => state.entities[id]),
  paths: state => {
    let dict = {};
    const all = state.allById.map(id => state.entities[id]);
    all.forEach(s => {
      if (s.path in dict) {
        dict[s.path] = [...dict[s.path], s];
      } else {
        dict[s.path] = [s];
      }
    });

    const paths = Object.entries(dict).map(([key, value]) => ({ key, value }));
    return paths;
  },
  selectedSubscription: state => {
    if (!state.selectedId) {
      return null;
    }
    return state.entities[state.selectedId];
  }
};

const SELECT_SUBSCRIPTION = 'SELECT_SUBSCRIPTION';
const SET_SUBSCRIPTION = 'SET_SUBSCRIPTION';
const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS';
const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';

const actions = {
  get({ commit }, payload) {
    if (payload.id in state.entities) {
      // check if it's cached
      return;
    }

    config.getSubscription(payload.namespace, payload.id).then(res => {
      const result = normalize(res.data, subscriptionSchema);
      commit(SET_SUBSCRIPTION, result);
    });
  },
  getAll({ commit }, payload) {
    config.getSubscriptions(payload.namespace).then(res => {
      const result = normalize(res.data.subscriptions, subscriptionListSchema);
      commit(SET_SUBSCRIPTIONS, result);
    });
  },
  create({ commit }, payload) {
    config.createSubscription(payload.namespace, payload.data).then(res => {
      const result = normalize(res.data, subscriptionSchema);
      commit(ADD_SUBSCRIPTION, result);
    });
  },
  delete({ commit }, payload) {
    config.deleteSubscription(payload.namespace, payload.id).then(res => {
      commit(DELETE_SUBSCRIPTION, { id: payload.id });
    });
  },
  select({ commit }, payload) {
    commit(SELECT_SUBSCRIPTION, payload);
  }
};

const mutations = {
  [SET_SUBSCRIPTION](state, { result, entities }) {
    const id = result;
    const allById = [id, ...state.allById];
    Vue.set(state, 'allById', allById);
    Vue.set(state.entities, id, entities.subscriptions[id]);
  },
  [SET_SUBSCRIPTIONS](state, { result, entities }) {
    Vue.set(state, 'allById', result);

    let subscriptions = {};
    if (entities && entities.subscriptions) {
      subscriptions = entities.subscriptions;
    }
    Vue.set(state, 'entities', subscriptions);
  },
  [ADD_SUBSCRIPTION](state, { result, entities }) {
    const id = result;
    const allById = [id, ...state.allById];
    Vue.set(state, 'allById', allById);
    Vue.set(state.entities, id, entities.subscriptions[id]);
  },
  [DELETE_SUBSCRIPTION](state, { id: deletedId }) {
    const newSubscriptionsById = state.allById.filter(id => id !== deletedId);
    Vue.set(state, 'allById', newSubscriptionsById);
    Vue.set(state, 'selectedId', null);
  },
  [SELECT_SUBSCRIPTION](state, { id }) {
    Vue.set(state, 'selectedId', id);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
