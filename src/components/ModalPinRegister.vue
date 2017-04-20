<template>
    <div class='pin-register'>
        <input class="pin-register__name" 
               v-model="pin_name">
        <button class="pin-register__button--close" @click="closeModal">X</button>
        <dl class="pin-register__list">
            <dt class="pin-register__list__title">지도선택</dt>
            <dd class="pin-register__list__select">
                <select v-model="selected" id="map-select" class="map-select">
                    <option v-for="map of map_list">
                        {{map.map_name}}
                    </option>
                </select>

                <p>선택!!!! {{selected}}</p>
            </dd>
            <dt class="pin-register__list__title">카테고리 선택</dt>
            <dd>
                <div role="group" id="category-group" class="category-group">
                    <button @click="selected_color=0" :class="['food-btn', {'select' : selected_color === 0}]">음식</button>
                    <button @click="selected_color=1" :class="['shopping-btn', {'select' : selected_color === 1}]">쇼핑</button>
                    <button @click="selected_color=2" :class="['stay-btn', {'select' : selected_color === 2}]">숙박</button>
                    <button @click="selected_color=3" :class="['cafe-btn', {'select' : selected_color === 3}]">카페</button>
                    <button @click="selected_color=4" :class="['etc-btn', {'select' : selected_color === 4}]">기타</button>
                </div>
            </dd>
            <dt class="pin-register__list__title">공개 여부</dt>
            <dd class="pin-register__list__select--float">
                <label for="chk_public">공개</label>
                <input name="chk" id="chk_public" type="radio">
            </dd>
            <dd>
                <label for="chk_private">비공개</label>
                <input name="chk" id="chk_private" type="radio">
            </dd>
        </dl>
        <div class="pin-register__button--confirm">
            <button type="button" class="ok_btn"
                    @click="pinRegister()">
                    등록
            </button>        

            <button type="button" class="cancel-btn" @click="$emit('closeModal')">취소</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pin-register',
    props:['lat_lng'],
    data(){
        return {
            map_id: '',
            pin_name: '',
            map_list: [],
            // mapping_pk: {},
            pin_color: [
                '#ff6b6b',
                '#ffa300', 
                '#2dccb2',
                '#bc7fff',
                '#767cfe'
            ],
            selected_color: null,
            is_map_empty : false,
            selected: ''      
        }
    },
    mounted(){
        let _this = this;
        let user_id = sessionStorage.getItem('user_pk');
        let url = this.$store.state.url + '/api/member/'+user_id;        

        this.$http.get(url)
        .then(function(res){
            console.log('res: ', res);

            // map list 체크
            //console.log(res.data.map_list);

            let map_list = res.data.map_list;
            //console.log(map_list.length);
            if(map_list.length === 0){
                console.log('true');
                _this.is_map_empty = true;
            }else{
                /* 일일히 맵이름과 아이디를 맵핑해주는 함수를 사용하는 방법.
                  map_list.forEach(function(item){
                    console.log(item);
                    let map_name = item.map_name;
                    _this.mapping_pk[map_name] = item.id;
                })*/
                _this.map_list=map_list;
            }
        })
        .catch(function(err){
            // console.log(err.response);
        });
    },
    methods: {
        closeModal(){
            this.$emit('closeModal');
            this.$store.state.main_state.is_pincheck_menu_open = false;
        },
        pinRegister(){
            let _this = this;
            let url = this.$store.state.url + 'api/pin/';
            let l = this.map_list.length;
            let lat = this.lat_lng.lat();
            let lng = this.lat_lng.lng();
            for( let i = 0; i < l ; i++){
                if(this.map_list[i].map_name === this.selected){
                    this.map_id = this.map_list[i].id
                    break;
                }
            }
            console.log(this.map_id);
            if( !this.selected || !this.pin_name.trim() || !this.map_id){
                window.alert('카테고리, 핀이름, 지도를 선택했는지 확인해 주세요');
            }else {
                this.$http.post(url, {
                    pin:{
                        pin_name: _this.pin_name,
                        map: _this.map_id,
                        pin_label: _this.selected_color,
                    },
                    place:{
                        lat,
                        lng
                    }
                })
                .then(function(res){
                    console.log(res);
                })
                .catch(function(err){
                    console.log(err.response);
                })
            }
        }
    }
}
</script>