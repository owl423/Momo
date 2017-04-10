import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
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
