// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import tools from '@/libs/tools';
import '@/styles/common.less'
import vux from '@/config/vux.js'
import store from './store'
import mock from './mock/mock'

Vue.config.productionTip = false;
Vue.use(tools);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
