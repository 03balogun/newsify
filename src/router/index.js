import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/list';
import Detail from '@/components/detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
    },
    {
      path: '/headline/:index',
      name: 'Detail',
      component: Detail,
    },
  ],
});
