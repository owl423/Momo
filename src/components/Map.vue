<template>
<div>
    <div id='map' ref="map" @click="addMarker">
    </div>
    <button type="button" class="slide_button" @click="is_menu_open=true"> > </button>
    <transition name="slide" mode="out-in">
        <Sidemenu @pinRegister="is_modal_open=true" v-if="is_menu_open" @sideClose="is_menu_open=false"></Sidemenu>
    </transition>
    <Modal v-if="is_modal_open">
        <Modal-pin-register @closeModal="is_modal_open= false"></Modal-pin-register>
    </Modal>
    <Search></Search>
</div>
</template>

<script>
import Sidemenu from './SideMenu.vue';
import Search from './Search.vue';
import ModalPinRegister from './ModalPinRegister.vue';
import Modal from './Modal.vue';
export default {
   name: 'map',
    props: ['is_open'],
    components: {
        Sidemenu,
        Modal,
        ModalPinRegister,
        Search
    },
    data (){
        return {
            is_menu_open: false,
            is_modal_open: false,
            map: null,
            markers: [],
            check: false,
            lat_lng: null
        }
    },
    mounted(){
        var _this = this;
        // var url = `http://api.ipinfodb.com/v3/ip-city/?key=268f7c0ca68536bba778befedb85b36bdd25275de6a21cffe648a7cdbe698e57&ip=${ip()}&format=json`
        // $.get(url, function(data, status, xhr){
            // var lat = data.latitude;
            // var lng = data.longitude;
        var lat = 37.516271;
        var lng = 127.020171;
        var zoom		= 16;
        var init_latlng = new google.maps.LatLng(lat, lng);
        var map_options = {
            zoom: zoom,
            center: init_latlng,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        _this.map = new google.maps.Map(_this.$refs.map, map_options);
        $.get('http://localhost:3000/place_list', function(data, status, xhr){
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
        });
        _this.map.addListener('click', function(e){
            _this.lat_lng = e.latLng;
        })
        // });
    },
    updated(){
        console.log('update');
    },
    methods: {
        addMarker : function(){
            var _this = this;
            if(!_this.check){
                var marker = new google.maps.Marker({
                    position: _this.lat_lng,
                    map: _this.map
                });
                _this.markers.push(marker);
                _this.check = true;
            } else{
                _this.removeMarkers();
                _this.markers.pop();
                _this.setMarkers();
                _this.check = false;
                _this.addMarker();
            }
            this.is_menu_open=true;
        },
        setMarkers: function(){
            var _this = this;
            _this.markers.forEach(function( marker ){
                marker.setMap(_this.map);
            });
        },
        removeMarkers: function(){
            var _this = this;
            _this.markers.forEach(function( marker ){
                marker.setMap(null);
            });
        },
    }
}
</script>
