import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes.js'
import App from './App.vue'
import store from './store/index.js'

Vue.use(VueRouter);
Vue.prototype.$http = axios;


const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
