// 뷰의 활성화 상태를 관리해주는 vuex store module
// view_state
export default {
  state : {
    is_user_menu_state: false,
    is_side_state: false,
    is_modal_pin_register_state: false,
    is_modal_image_register_state: false,
    is_modal_map_register_state: false,
    is_modal_comment_register_state: false,
    is_pincheck_menu_state: false,
    is_carousel_state: false,
  },
  getters: {
    is_user_menu_state(state){
      return state.is_user_menu_state;
    },
    is_side_state(state){
      return state.is_side_state;
    },
    is_modal_pin_register_state(state){
      return state.is_modal_pin_register_state;
    },
    is_modal_image_register_state(state){
      return state.is_modal_image_register_state;
    },
    is_modal_map_register_state(state){
      return state.is_modal_map_register_state;
    },
    is_modal_comment_register_state(state){
      return state.is_modal_comment_register_state;
    },
    is_pincheck_menu_state(state){
      return state.is_pincheck_menu_state;
    },
    is_carousel_state(state){
      return state.is_carousel_state;
    }
  },
  mutations: {
    // state를 변경해 주는 함수
    setUserMenuState(state, bool){
      state.is_user_menu_state = bool;
    },
    setSideState(state, bool){
      state.is_side_state = bool;
    },
    setModalPinRegisterState(state, bool){
      state.is_modal_pin_register_state = bool;
    },
    setModalImageRegisterState(state, bool){
      state.is_modal_image_register_state = bool;
    },
    setModalMapRegisterState(state, bool){
      state.is_modal_map_register_state = bool;
    },
    setModalCommentRegisterState(state, bool){
      state.is_modal_comment_register_state = bool;
    },
    setPincheckMenuState(state, bool){
      state.is_pincheck_menu_state = bool;
    },
    setCarouselState(state, bool){
      state.is_carousel_state = bool;
    }
  }
}