import Vue from 'vue';

const state = {
  isShowConfirmDialog: false,
  confirmItem: {
    title: '',
    content: ''
  },
  onConfirmAction: () => {}
}

const getters = {
  getIsShowConfirmDialog: state => state.isShowConfirmDialog,
  getOnConfirmAction: state => state.onConfirmAction,
  getConfirmItem: state => state.confirmItem
}

const OPEN_CONFIRM_DIALOG = 'OPEN_CONFIRM_DIALOG';
const CLOSE_CONFIRM_DIALOG = 'CLOSE_CONFIRM_DIALOG';

const actions = {
  openConfirmDialog({
    commit
  }, payload) {
    commit(OPEN_CONFIRM_DIALOG, payload);
  },
  closeConfirmDialog({commit}) {
    commit(CLOSE_CONFIRM_DIALOG);
  }
}

const mutations = {
  [OPEN_CONFIRM_DIALOG](state, {title, content, onConfirmAction}) {
    Vue.set(state, 'confirmItem', {title, content})
    Vue.set(state, 'onConfirmAction', onConfirmAction);
    Vue.set(state, 'isShowConfirmDialog', true);
  },
  [CLOSE_CONFIRM_DIALOG](state) {
    Vue.set(state, 'onConfirmAction', () => {});
    Vue.set(state, 'isShowConfirmDialog', false);
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
