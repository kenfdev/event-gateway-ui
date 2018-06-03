import Vue from 'vue'
import Vuex from 'vuex'
import functions from './modules/functions'
import functionForm from './modules/function-form'
import subscriptions from './modules/subscriptions'
import subscriptionForm from './modules/subscription-form'
import subscriptionDetail from './modules/subscription-detail';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    functions,
    functionForm,
    subscriptions,
    subscriptionForm,
    subscriptionDetail
  },
  strict: debug,
  plugins: debug
    ? [createLogger()]
    : []
})
