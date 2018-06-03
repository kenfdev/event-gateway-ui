import Vue from 'vue';
import Router from 'vue-router';
import DashboardPage from '@/containers/DashboardPage';
import FunctionsPage from '@/containers/FunctionsPage';
import NewFunctionPage from '@/containers/NewFunctionPage';
import EditFunctionPage from '@/containers/EditFunctionPage';
import SubscriptionsPage from '@/containers/SubscriptionsPage';
import SubscriptionDetailPage from '@/containers/SubscriptionDetailPage';
import NewSubscriptionPage from '@/containers/NewSubscriptionPage';

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
      path: '/functions/:id/edit',
      name: 'EditFunctionsPage',
      component: EditFunctionPage
    },
    {
      path: '/functions/new',
      name: 'NewFunctionPage',
      component: NewFunctionPage
    },
    {
      path: '/subscriptions/new',
      name: 'NewSubscriptionPage',
      component: NewSubscriptionPage
    },
    {
      path: '/subscriptions/:id',
      name: 'SubscriptionDetailPage',
      component: SubscriptionDetailPage
    },
    {
      path: '/subscriptions',
      name: 'SubscriptionsPage',
      component: SubscriptionsPage
    }
  ]
})
