<template>
    <div class="map-register">
        <button class="map-register__button__close
                       button__close" 
                @click="$store.state.main_state.is_modal_map_register_open = false">
        </button>
        <button class="map-register__button__add" 
                @click="addMap">
            지도추가
        </button>
        <button class="map-register__button__remove">
            지도삭제
        </button>
        <div class="map-register__button__add-group" 
             v-if="is_map_add">
            <ModalMapRegisterForm 
                @mapRegister="mapRegister">
            </ModalMapRegisterForm>
        </div>
        <ul>
            <li v-for ="map in map_list">
                {{map.map_name}} :
                {{map.description}}
            </li>
        </ul>
        <p v-if="is_map_empty">지도를 추가해주세요</p>
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
            map_list: [],
            is_map_add: false,
            is_map_empty : false
        }
    },
    mounted(){        
        // sessionStorage에서 유저키 확인
        // console.log(sessionStorage.getItem('user_pk'));
        let _this = this;
        let user_id = sessionStorage.getItem('user_pk');
        let url = this.$store.state.url + '/api/member/'+user_id;

        this.$http.get(url)
        .then(function(res){
            console.log('res: ', res);

            // map list 체크
            console.log(res.data.map_list);

            let map_chk = res.data.map_list;
            console.log(map_chk.length);
            if(map_chk.length === 0){
                console.log('true');
                _this.is_map_empty = true;
            }else{
                _this.map_list=map_chk;
            }
        })
        .catch(function(err){
            // console.log(err.response);
        });
    },
    methods: {
        addMap: function() {
            this.is_map_add=!this.is_map_add;
            this.is_map_empty = false;
        },
        mapRegister(name, info){
            // test를 위해 뿌려주는것 테스트하는 코드 (emit)
            this.map_name = name;
            this.map_info = info;


            let url = this.$store.state.url + '/api/map/';
            this.$http.post(url, {
                map_name: name,
                description: info,
                is_private: 'false',
            })
            .then(function(res){
                console.log(res);
            })
        }
    }
}
</script>