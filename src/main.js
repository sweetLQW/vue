import Vue from 'vue';
import App from './app.vue';
import router from './router';
import axios from './js/axios';
import './main.css'

Vue.prototype.$axios = axios;
new Vue({
  el: '#nav',
  router,
  components: {
    App
  },
  template: '<App/>'
})