<template>
    <div class="map-register">
        <button class="map-register__button__close
                       button__modal__close" 
                @click="$store.state.main_state.is_modal_map_register_open = false">
        </button>
        <!--
        <button class="map-register__button__add" 
                @click="addMap">
            지도추가
        </button>
        <button class="map-register__button__remove">
            지도삭제
        </button>
        -->

        <ModalMapRegisterForm 
            class="map-register__add-group" 
                @mapRegister="mapRegister">
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
            </ul>
        </div>
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
            let _this = this;

            let url = this.$store.state.url + '/api/map/';
            this.$http.post(url, {
                map_name: name,
                description: info,
                is_private: 'false',
            })
            .then(function(res){
                console.log(res);
                _this.map_list.push(res.data);
            })
        }
    }
}
</script>