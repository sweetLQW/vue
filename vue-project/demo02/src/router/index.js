import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/home.vue';
import AboutPage from '../views/about.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
      }
  ]
});