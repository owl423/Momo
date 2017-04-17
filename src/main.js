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
    user: {
      user_profile: '',
      user_name: '',
      user_token: '',
      user_pk: '',
    },
    url : 'http://eb-client.ap-northeast-2.elasticbeanstalk.com/',
  },
  mutations: {
    setUserInfo (state, user_data) {
      state.user.user_name = user_data.user_name;
      state.user.user_profile = user_data.user_profile;
      state.user.user_token = user_data.user_token;
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
