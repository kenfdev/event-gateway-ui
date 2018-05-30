import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/containers/DashboardPage'
import FunctionsPage from '@/containers/FunctionsPage'
import NewFunctionPage from '@/containers/NewFunctionPage'
import SubscriptionsPage from '@/containers/SubscriptionsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashboardPage',
      component: DashboardPage
    },
    {
      path: '/functions',
      name: 'FunctionsPage',
      component: FunctionsPage
    },
    {
      path: '/functions/new',
      name: 'NewFunctionPage',
      component: NewFunctionPage
    },
    {
      path: '/subscriptions',
      name: 'SubscriptionsPage',
      component: SubscriptionsPage
    }
  ]
})
