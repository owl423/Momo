// user 정보 저장하는 vuex store module
// user
export default {
      state: {
        user_profile: '',
        user_name: '',
        user_token: '',
        user_pk: '',
      },
      getters: {
        user_profile(state){
          return state.user_profile;
        },
        user_name(state){
          return state.user_name;          
        },
        user_token(state){
          return state.user_token;          
        },
        user_pk(state){
          return state.user_pk;
        }
      },
      mutations: {
        // user_data 객체를 받아서 저장
        setUserInfo (state, user_data) {
          state.user_name = user_data.user_name;
          state.user_profile = user_data.user_profile;
          state.user_token = user_data.user_token;
          state.user_pk = user_data.user_pk;
        },
      }
}