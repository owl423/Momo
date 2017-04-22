<template>
    <div class="pin-register">
        <input class="pin-register__name" 
               v-model="pin_name">
        <button class="pin-register__button__close
                       button__close" 
                @click="closeModal">
        </button>
        <dl class="pin-register__list">
            <dt class="pin-register__list__title">지도선택</dt>
            <dd class="pin-register__list__select">
                <select v-model="selected" id="map-select" class="map-select">
                    <option v-for="map of map_list">
                        {{map.map_name}}
                    </option>
                </select>

                <!--<p>선택!!!! {{selected}}</p>-->
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
        <div class="pin-register__button">
            <button type="button"
                    class="pin-register__button__confirm"
                    @click="pinRegister({axios : $http, pin_name, selected, selected_color})">
                등록
            </button>        

            <button type="button"
                    class="pin-register__button__cancel button__cancel"
                    @click="$emit('closeModal')">
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
            'setPincheckMenuState'
        ]),
        ...mapActions([
            'pinRegister'
        ]),
        closeModal(){
            this.$emit('closeModal');
            this.setPincheckMenuState(false);
        },
    }
}
</script>