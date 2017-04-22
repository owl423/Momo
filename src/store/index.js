import Vuex from 'vuex'
import Vue from 'vue'
import user_map from './usermap'
import user from './user'
import view_state from './viewstate'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user_map,
    user,
    view_state
  },
  state: {
    url : 'http://eb-client.ap-northeast-2.elasticbeanstalk.com',
  },
});