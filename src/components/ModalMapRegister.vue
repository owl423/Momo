<template>
    <div class="map-register">
        <button class="map-register__button--close" @click="$store.state.main_state.is_modal_map_register_open = false">X</button>
        <button class="map-register__button--add" 
                @click="is_map_add=!is_map_add">
            지도추가
        </button>
        <button class="map-register--map-remove-button">지도삭제</button>
        <div class="map-register--map-add-group" v-if="is_map_add">
            <ModalMapRegisterForm @mapRegister="mapRegister"></ModalMapRegisterForm>
        </div>
        <ul>
            <li v-for ="map in map_list">
                {{map.map_name}}
            </li>
        </ul>
        <div>
            {{map_register_name}}
            {{map_register_info}}
        </div>
    </div>
</template>

<script>
import ModalMapRegisterForm from './ModalMapRegisterForm.vue'
export default {
    name : 'map-register',
    components: {
        ModalMapRegisterForm
    },
    data(){
        return {
            map_list: [
            ],
            is_map_add: false,
            map_register_name: '',
            map_register_info: ''
        }
    },
    created(){
        let url = this.$store.state.url + '/api/member/';
        
        console.log(session.getItem('user_pk'));
        this.$http.get(url)
        .then(function(res){
            console.log('res: ', res);
        })
        .catch(function(err){
            console.log(err.response);
        });
    },
    methods: {
        addMap: function() {

        },
        mapRegister(name, info){
            this.map_register_name = name;
            this.map_register_info = info;
        }
    }
}
</script>