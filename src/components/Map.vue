<template>
<div>
    <div id='map' ref="map">
    </div>
    <!--<button type="button" class="side_button" @click="is_side_open=true"> > </button>-->
    <transition name="slide" mode="out-in">
        <Sidemenu 
         v-if="is_side_state"
         ></Sidemenu>
    </transition>
    <Modal v-if="is_modal_pin_register_state">
        <Modal-pin-register 
         @closeModal="setModalPinRegisterState(false)">
         </Modal-pin-register>
    </Modal>
    <Modal v-if="is_modal_image_register_state">
        <ModalImageRegister
            @closeModal = "setModalImageRegisterState(false)"></ModalImageRegister>
    </Modal>
    <Modal v-if="is_modal_comment_register_state">
        <ModalCommentRegister
            @closeModal="setModalCommentRegisterState(false)"></ModalCommentRegister>
    </Modal>
    <Modal v-if="is_modal_map_register_state">
        <ModalMapRegister>
        </ModalMapRegister>
    </Modal>
    <Search></Search>
    <UserInfo></UserInfo>
    <Carousel v-if="is_carousel_state" @closeCarousel="setCarouselState(false)"></Carousel>
    <transition name="bottom-slide" mode="out-in">
    <PinCheckMenu class="pin-check-menu" v-if="is_pincheck_menu_state" @pinOK="setModalPinRegisterState(true)" ></PinCheckMenu>
    </transition>
</div>
</template>

<script>
import Sidemenu from './SideMenu.vue';
import Usermenu from './UserMenu.vue';
import Search from './Search.vue';
import ModalPinRegister from './ModalPinRegister.vue';
import ModalImageRegister from'./ModalImageRegister.vue';
import ModalCommentRegister from'./ModalCommentRegister.vue';
import ModalMapRegister from './ModalMapRegister.vue';
import Modal from './Modal.vue';
import UserInfo from './UserInfo.vue';
import Carousel from './Carousel.vue';
import PinCheckMenu from './PinCheckMenu.vue';
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    name: 'map',
    components: {
        Sidemenu,
        Modal,
        ModalPinRegister,
        ModalImageRegister,
        ModalCommentRegister,
        ModalMapRegister,
        Search,
        UserInfo,
        Carousel,
        PinCheckMenu
    },
    computed: {
        // vuex의 state변수를 간편하기 쓰기 위해 주입
        ...mapGetters([
            'is_side_state',
            'is_modal_pin_register_state',
            'is_modal_image_register_state',
            'is_modal_map_register_state',
            'is_modal_comment_register_state',
            'is_pincheck_menu_state',
            'is_carousel_state',
            'map',
            'map_list',
            'markers'
        ])
    },
    methods: {
        // vuex의 map_list가 변경되면 업데이트 해주는 함수
        ...mapActions([
            'mapListUpdateAction',
            'oneMarker'
        ]),
        // vuex의 state변경 mutations를 간편하기 쓰기 위해 주입
        ...mapMutations([
            'setSideState',
            'setModalPinRegisterState',
            'setModalImageRegisterState',
            'setModalMapRegisterState',
            'setModalCommentRegisterState',
            'setPincheckMenuState',
            'setCarouselState',
            'setMap',
            'pushMarker',
            'popMarker',
            'setMarkers',
            'removeMarkers',
            'mapListUpdate',
            'mapPinMark'
        ]),
    },
    beforeRouteEnter (to, from, next) {
        next(function(vm){
            if(vm.$store.state.user.user_token || sessionStorage.getItem('user_token')){
                vm.$router.push('/map');
            }else{
                vm.$router.push('/');
            }
        });
    },
    mounted(){
        // 로그인 후 initialize
        let _this = this;
        let user_token = window.sessionStorage.getItem('user_token');
        // http 통신을 위해 헤더에 token 설정
        this.$http.defaults.headers.common['Authorization'] = "Token "+ user_token;
        let lat = 37.516271;
        let lng = 127.020171;
        let zoom = 16;
        let init_latlng = new google.maps.LatLng(lat, lng);
        let map_options = {
            zoom: zoom,
            center: init_latlng,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        let map = new google.maps.Map(_this.$refs.map, map_options);
        // usermap 모듈의 map 변수 세팅
        this.setMap(map);
        // 통신을 통해 가져온 map_list의 pin을 지도에 표시해주는 함수
        this.mapListUpdateAction(this.$http);
        // 장소를 한번에 한개씩만 선택
        this.oneMarker();
    },
}
</script>
