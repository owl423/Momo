<template>
    <div>
        <dl>
            <dt class="map-register__add-group__title">
                <label for="map-register_name">
                    나만의 지도 이름
                </label>
            </dt>
            <dd class="map-register__add-group__desc">
                <input v-model="map_name" 
                        id="map-register_name" 
                        class="map-register__add-group__name" 
                        type="text">
            </dd>
            
            <dt class="map-register__add-group__title">
                <label for="map-register_desc">
                    나만의 지도 설명
                </label>
            </dt>
            <dd>
                <input v-model="map_description"
                        id="map-register_desc"
                        class="map-register__add-group__desc"
                        type="text">
            </dd>
        </dl>
        <button type="button"
                class="map-register__add-group__button__resister
                      button__register"
                @click="mapRegister({axios: $http, map_name, map_description})">
                등록
        </button>        
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name : 'map-register-form',
    data(){
        return {
            'map_name': '',
            'map_description': ''
        }
    },
    methods : {
        ...mapActions([
            'mapRegister'
        ]),
    }
}
</script>