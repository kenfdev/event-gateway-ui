import Vue from 'vue';

const state = {
  form: {
    name: '',
    authorizerId: ''
  }
};

const getters = {
  getForm: state => state.form
};

const SET_NAME = 'SET_NAME';
const SET_AUTHORIZER_ID = 'SET_AUTHORIZER_ID';
const CLEAR_FORM = 'CLEAR_FORM';

const actions = {
  setName({
    commit
  }, name) {
    commit(SET_NAME, {name});
  },
  setAuthorizerId({
    commit
  }, authorizerId) {
    commit(SET_AUTHORIZER_ID, {authorizerId});
  },
  clearForm({commit}) {
    commit(CLEAR_FORM);
  }
};

const mutations = {
  [SET_NAME](state, {name}) {
    state.form.name = name;
  },
  [SET_AUTHORIZER_ID](state, {authorizerId}) {
    state.form.authorizerId = authorizerId;
  },
  [CLEAR_FORM](state) {
    const form = {
      name: '',
      authorizerId: ''
    };

    Vue.set(state, 'form', form);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
};
