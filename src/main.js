// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Cookies from 'js-cookie';

Vue.use(Element);
Vue.prototype.axios = axios;
Vue.prototype.Cookies = Cookies;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
