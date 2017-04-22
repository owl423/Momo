<template>
    <div class="map-register">
        <button class="map-register__button__close
                       button__modal__close" 
                @click="setModalMapRegisterState(false)">
        </button>
        <ModalMapRegisterForm 
            class="map-register__add-group">
        </ModalMapRegisterForm>

        <div class="map-register__list">
            <strong class="map-register__list__title">내 지도 목록</strong>
            <ul>
                <li v-for ="map in map_list">
                    <a href="">
                        <strong class="map-register__list__map-name">{{map.map_name}}</strong>
                        <span>{{map.description}}</span>
                    </a>
                </li>
                <li class="map-register__list-nomap" v-if="map_list.length === 0">지도를 추가해주세요</li>
            </ul>
        </div>
    </div>
</template>

<script>
import ModalMapRegisterForm from './ModalMapRegisterForm.vue'
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
    name : 'map-register',
    components: {
        ModalMapRegisterForm
    },
    computed:{
        ...mapGetters([
            'map_list',
        ])
    },
    methods: {
        ...mapMutations([
            'setModalMapRegisterState'
        ])
    },
}
</script>