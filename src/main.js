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
    main_state:{
      is_menu_open: false,
      is_side_open: false,
      is_modal_pin_register_open: false,
      is_modal_image_register_open: false,
      is_modal_map_register_open: false,
      is_modal_comment_register_open: false,
      is_pincheck_menu_open: false,
      is_carousel_open: false,
    },
    map:{
      map_list: [],
      markers: []
    },
    url : 'http://eb-client.ap-northeast-2.elasticbeanstalk.com/',
  },
  mutations: {
    // VueX 유저 데이터 저장 함수
    setUserInfo (state, user_data) {
      state.user.user_name = user_data.user_name;
      state.user.user_profile = user_data.user_profile;
      state.user.user_token = user_data.user_token;
      state.user.user_pk = user_data.user_pk;
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
