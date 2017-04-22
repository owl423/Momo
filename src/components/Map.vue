<template>
<div>
    <div id='map' ref="map" @click="addMarker">
    </div>
    <!--<button type="button" class="side_button" @click="is_side_open=true"> > </button>-->
    <transition name="slide" mode="out-in">
        <Sidemenu 
         ></Sidemenu>
    </transition>
    <Modal v-if="$store.state.main_state.is_modal_pin_register_open">
        <Modal-pin-register 
         @closeModal="$store.state.main_state.is_modal_pin_register_open = false"
         :lat_lng="lat_lng"></Modal-pin-register>
    </Modal>
    <Modal v-if="$store.state.main_state.is_modal_image_register_open">
        <ModalImageRegister
            @closeModal = "$store.state.main_state.is_modal_image_register_open = false"></ModalImageRegister>
    </Modal>
    <Modal v-if="$store.state.main_state.is_modal_comment_register_open">
        <ModalCommentRegister
            @closeModal="$store.state.main_state.is_modal_comment_register_open = false"></ModalCommentRegister>
    </Modal>
    <Modal v-if="$store.state.main_state.is_modal_map_register_open">
        <ModalMapRegister v-if="$store.state.main_state.is_modal_map_register_open">
        </ModalMapRegister>
    </Modal>
    <Search></Search>
    <UserInfo></UserInfo>
    <Carousel v-if="$store.state.main_state.is_carousel_open" @closeCarousel=" $store.state.main_state.is_carousel_open = false "></Carousel>
    <transition name="bottom-slide" mode="out-in">
    <PinCheckMenu class="pin-check-menu" v-if="$store.state.main_state.is_pincheck_menu_open" @pinOK="$store.state.main_state.is_modal_pin_register_open = true" ></PinCheckMenu>
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
    beforeRouteEnter (to, from, next) {
        next(function(vm){
            if(vm.$store.state.user.user_token || sessionStorage.getItem('user_token')){
                console.log('route guard');
                vm.$router.push('/map');
            }else{
                vm.$router.push('/');
            }
        });
    },
    data (){
        return {
            map: null,
            markers: [],
            check: false,
            lat_lng: null
        }
    },
    mounted(){
        let _this = this;
        let user_token = window.sessionStorage.getItem('user_token');
        this.$http.defaults.headers.common['Authorization'] = "Token "+ user_token;
        let lat = 37.516271;
        let lng = 127.020171;
        let zoom		= 16;
        let init_latlng = new google.maps.LatLng(lat, lng);
        let map_options = {
            zoom: zoom,
            center: init_latlng,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        let url = this.$store.state.url + `api/member/${sessionStorage.getItem('user_pk')}/`;
        console.log(url);
        this.map = new google.maps.Map(_this.$refs.map, map_options);
        this.$http.get(url)
        .then(function(res){
            _this.$store.state.map.map_list = res.data.map_list;
            res.data.map_list.forEach(function(map){
                map.pin_list.forEach(function(pin){
                    let lat_lng = new google.maps.LatLng(pin.place.lat, pin.place.lng);
                    let marker = new google.maps.Marker({
                        position: lat_lng,
                        map : _this.map,
                        title : map.map_name
                    });
                    _this.$store.state.map.markers.push(marker);
                    console.log('marker', marker);
                    google.maps.event.addListener(marker, 'click', function(e){
                        console.log('markerinfo:', e);
                        _this.$store.state.main_state.is_side_open = true;
                    });
                });
            });
        })
        .catch(function(err){
            console.log(err.response);
        })
        console.log(google.maps);
        /*$.get('http://localhost:3000/place_list', function(data, status, xhr){
            data.forEach(function(item){
                function toggleBounce() {
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                }
                var lat_lag = new google.maps.LatLng(item.lat, item.lng);
                var marker = new google.maps.Marker({
                    position : lat_lag,
                    map : _this.map,
                    title : item.title
                });
                marker.addListener('click',toggleBounce);
                var content_string = `<div>
                                        <h2>${item.head}</h2>
                                        <p>${item.desc}</p>
                                        <a href="${item.link}" target="_blank">${item.link}</a>
                                    </div>`;
                var info_window = new google.maps.InfoWindow({
                    content: content_string,
                    maxWidth: 400
                });
                google.maps.event.addListener(marker, 'click', function(){
                    info_window.open(_this.map, marker);
                });
                _this.markers.push(marker);
            });
        });*/
        _this.map.addListener('click', function(e){
            if(!_this.$store.state.main_state.is_pincheck_menu_open){
                _this.lat_lng = e.latLng;
                let marker = new google.maps.Marker({
                    position: e.latLng,
                    map: _this.map
                });
                _this.$store.state.map.markers.push(marker);
                _this.$store.state.main_state.is_pincheck_menu_open = true;
            } else{
                console.log('marker_list:',_this.$store.state.map.markers);
                _this.removeMarkers();
                _this.$store.state.map.markers.pop();
                _this.setMarkers();
                _this.$store.state.main_state.is_pincheck_menu_open = false;
            }
        })
        // });
    },
    methods: {
        addMarker : function(){
            // var _this = this;
            // if(!_this.check){
            //     var marker = new google.maps.Marker({
            //         position: _this.lat_lng,
            //         map: _this.map
            //     });
            //     _this.markers.push(marker);
            //     _this.check = true;
            //     _this.$store.state.main_state.is_pincheck_menu_open = true;
            // } else{
            //     _this.$store.state.main_state.is_pincheck_menu_open = false;
            //     _this.removeMarkers();
            //     _this.markers.pop();
            //     _this.setMarkers();
            //     _this.check = false;
            // }
        },
        setMarkers: function(){
            var _this = this;
            _this.$store.state.map.markers.forEach(function( marker ){
                marker.setMap(_this.map);
            });
        },
        removeMarkers: function(){
            var _this = this;
            _this.$store.state.map.markers.forEach(function( marker ){
                marker.setMap(null);
            });
        },
    }
}
</script>
