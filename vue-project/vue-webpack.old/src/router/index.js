import Vue from 'vue';
import Router from 'vue-router';
import test from '../views/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    }
  ]
});