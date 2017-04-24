import Vuex from 'vuex'
import Vue from 'vue'
import user_map from './usermap'
import user from './user'
import view_state from './viewstate'
import search from './search'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user_map,
    user,
    view_state,
    search
  },
  state: {
    url : 'http://eb-client.ap-northeast-2.elasticbeanstalk.com',
    icon_color:[
      'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
      'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
      'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    ]
  },
});