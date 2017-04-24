<template>
    <div class="tabmenu__view tabmenu__view--map">
        <button class="tabmenu__view__button__edit" 
                @click="setModalMapRegisterState(true)">
            Edit
        </button>
        
        <dl v-for="map in map_list">
            <dt><input id="tabmenu__view--chk1" type="checkbox" checked>
                 <label for="tabmenu__view--chk1"> {{map.map_name}} </label>
            </dt>
            <dd v-for="pin in map.pin_list"> 
            <a href="" @click.prevent="moveMapPinPlace({place : pin.place})">{{pin.pin_name}}</a>
            </dd>
        </dl>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    name: 'tab-menu-map',
    computed : {
        ...mapGetters([
            'is_modal_map_register_state',
            'map_list'
        ])
    },
    methods:{
        ...mapMutations([
            'setModalMapRegisterState',
        ]),
        ...mapActions([
            'moveMapPinPlace'
        ])
    }
}    
</script>