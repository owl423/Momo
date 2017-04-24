<template>
    <div class="pin-register">
        <button class="pin-register__button__close
                       button__modal__close" 
                @click="closeModal">
        </button>
        <dl class="pin-register__form register__form">
            <dt class="pin-register__form__title">
                <label for="pin-register_name">
                    핀이름
                </label>
            </dt>
            <dd>
                <input v-model="pin_name"
                        id="pin-register_name"
                        class="pin-register__name"
                        type="text">
            </dd>
            <dt class="pin-register__form__title">
                <label for="map-select">지도선택</label>
            </dt>
            <dd class="pin-register__form__select">
                <select v-model="selected" 
                        id="map-select" 
                        class="map-select"
                        name="">
                    <option selected 
                    v-if="map_list.length !== 0"
                    value="지도를 선택해 주세요.">
                        지도를 선택해 주세요.
                    </option>
                    <option v-else>
                        선택 할 지도가 없습니다.
                    </option>
                    <option v-for="map of map_list" :value="map.map_name">
                        {{map.map_name}}
                    </option>
                </select>

                <!--<p>선택!!!! {{selected}}</p>-->
            </dd>
            <dt class="pin-register__form__title">
                <label for="pin-register_category-group">
                    카테고리 선택
                </label>
            </dt>
            <dd>
                <div role="group" id="pin-register_category-group" 
                    class="pin-register__form__category-group
                           register__category-group">
                    <button @click="selected_color=0" :class="['stay-btn', {'selected' : selected_color === 0}]">장소</button>
                    <button @click="selected_color=1" :class="['food-btn', {'selected' : selected_color === 1}]">음식</button>
                    <button @click="selected_color=2" :class="['cafe-btn', {'selected' : selected_color === 2}]">카페</button>
                    <button @click="selected_color=3" :class="['shopping-btn', {'selected' : selected_color === 3}]">쇼핑</button>
                    <button @click="selected_color=4" :class="['etc-btn', {'selected' : selected_color === 4}]">기타</button>
                </div>
            </dd>
            <!--
            <dt class="pin-register__form__title">공개 여부</dt>
            <dd class="pin-register__form__select--float">
                <label for="chk_public">공개</label>
                <input name="chk" id="chk_public" type="radio">
            </dd>
            <dd>
                <label for="chk_private">비공개</label>
                <input name="chk" id="chk_private" type="radio">
            </dd>
            -->
        </dl>
        <div class="pin-register__button__submit
                    button__submit">
            <button type="button"
                    class="pin-register__button__confirm"
                    @click="pinRegister({axios : $http, pin_name, selected, selected_color})">
                등록
            </button>        

            <button type="button"
                    class="pin-register__button__cancel"
                    @click="closeModal">
                취소
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import {mapMutations} from 'vuex';

export default {
    name: 'pin-register',
    computed: {
        ...mapGetters([
            'map_list',
            'current_marker'
        ])
    },
    data(){
        return {
            pin_name: '',
            pin_color: [
                '#ff6b6b',
                '#ffa300', 
                '#2dccb2',
                '#bc7fff',
                '#767cfe'
            ],
            selected_color: null,
            selected: ''      
        }
    },
    methods: {
        ...mapMutations([
            'setPincheckMenuState',
            'removeCurrentMarker'
        ]),
        ...mapActions([
            'pinRegister'
        ]),
        closeModal(){
            this.setPincheckMenuState(false);
            this.removeCurrentMarker(this.current_marker);
            this.$emit('closeModal');
            
        },
    }
}
</script>