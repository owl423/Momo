// 검색을 위한 vuex모듈

export default {
  state: {
    search_result: []
  },
  getters: {
    search_result(state){
      return state.search_result;
    }
  },
  mutations: {
    setSearchResult(state, result){
      state.search_result = result;
    },
  },
  actions: {
    searchPlace({state, rootState, commit, dispatch}, {axios, search_val}){
      if(search_val !== ''){
        let url = `${rootState.url}/api/search/place/?keyword=${search_val}`;
        axios.get(url)
        .then(function(res){
          console.log(url);
          console.log(res.data);
          if(res.data.length !== 0){
            commit('setSearchResult', res.data);
          }
        })
        .catch(function(err){
          console.log(err.response);
        })
      }
    },
    searchPlaceAction({dispatch}, {search_val, axios}){
      dispatch('searchPlace', {search_val, axios})
    }
  }
}