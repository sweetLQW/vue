import util from'./util';
import config from'../config/config';
import axios from'./axios';

let module = {
  util,
  axios
};
module.install = function (Vue) {
  Vue.prototype.$util = util;
  Vue.prototype.$config = config;
  Vue.prototype.$axios = axios;
};
export default module;
