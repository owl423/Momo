<template>
    <div class='pin-register'>
        <strong class="pin-register__name">{{ this.place_name }}</strong>
        <button class="pin-register__button--close" @click="$emit('closeModal')">X</button>

        <p class="pin-register__list pin-register__select--map">
            <label class="pin-register__list--title" for="map-select">지도선택</label>
            <select id="map-select" class="map-select">
                <option v-for="map of map_list">{{map}}</option>
            </select>
        </p>
        <p class="pin-register__list pin-register__select--category">
            <label class="pin-register__list--title" for="category-group">
                카테고리 선택
            </label>
            <div role="group" id="category-group" class="category-group">
                <button @click="selected_color=0" :class="['food-btn', {'select' : selected_color === 0}]">음식</button>
                <button @click="selected_color=1" :class="['shopping-btn', {'select' : selected_color === 1}]">쇼핑</button>
                <button @click="selected_color=2" :class="['stay-btn', {'select' : selected_color === 2}]">숙박</button>
                <button @click="selected_color=3" :class="['cafe-btn', {'select' : selected_color === 3}]">카페</button>
                <button @click="selected_color=4" :class="['etc-btn', {'select' : selected_color === 4}]">기타</button>
            </div>
        </p>
        <p class="pin-register__list">
            <label class="pin-register__list--title" for="">공개 여부</label>

            <span>
                <label for="chk_public">공개</label>
                <input name="chk" id="chk_public" type="radio">
            </span>

            <span>
                <label for="chk_private">비공개</label>
                <input name="chk" id="chk_private" type="radio">
            </span>
        </p>
        <p class="pin-register__list">
            <button type="button" class="ok_btn">등록</button>
            <button type="button" class="cancel-btn" @click="$emit('closeModal')">취소</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'pin-register',
    data(){
        return {
            place_name: '수수커피',
            my_place_name: null,
            map_list: ['맛집', '여행', '쇼핑', '기타'],
            pin_color: [
                '#ff6b6b',
                '#ffa300', 
                '#2dccb2',
                '#bc7fff',
                '#767cfe'
            ],
            selected_color: null
        }
        
    }
}
</script>