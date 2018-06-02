import config from '../../api/config';

const state = {
  all: []
}

const getters = {
  all: state => state.all,
  paths: state => {
    let dict = {};
    state
      .all
      .forEach(s => {
        if (s.path in dict) {
          dict[s.path] = [
            ...dict[s.path],
            s
          ];
        } else {
          dict[s.path] = [s];
        }
      })

    const paths = Object
      .entries(dict)
      .map(([key, value]) => ({key, value}));
    return paths;
  }
}

const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS'
const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'

const actions = {
  getAll({commit}) {
    config
      .getSubscriptions()
      .then(res => {
        commit(SET_SUBSCRIPTIONS, {subscriptions: res.data.subscriptions});
      })
  },
  create({
    commit
  }, payload) {
    config
      .createSubscription(payload.namespace, payload.data)
      .then(res => {
        commit(ADD_SUBSCRIPTION, {subscription: res.data})
      })
  }
}

const mutations = {
  [SET_SUBSCRIPTIONS](state, {subscriptions}) {
    state.all = subscriptions;
  },
  [ADD_SUBSCRIPTION](state, {subscription}) {
    state.all = [
      subscription, ...state.all
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
