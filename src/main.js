import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes.js'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$http = axios;

const store = new Vuex.Store({
  state: {
    user: {},
    url : 'https://www.yeoptest.com'
  },
  mutations: {
    setUserInfo (state, userData) {
      state.user = userData;
    }
  }
});

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
