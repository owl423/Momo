<template>
    <div class='pin-register'>
        <h1>{{ this.place_name }}</h1>
        <div>
            <label>지도선택
                <select class="map-select">
                    <option v-for="map of map_list">{{map}}</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                카테고리 선택
            </label>
            <div role="group" class="category-group">
                <button @click="selected_color=0" :class="['food-btn', {'select' : selected_color === 0}]">음식</button>
                <button @click="selected_color=1" :class="['shopping-btn', {'select' : selected_color === 1}]">쇼핑</button>
                <button @click="selected_color=2" :class="['stay-btn', {'select' : selected_color === 2}]">숙박</button>
                <button @click="selected_color=3" :class="['cafe-btn', {'select' : selected_color === 3}]">카페</button>
                <button @click="selected_color=4" :class="['etc-btn', {'select' : selected_color === 4}]">기타</button>
            </div>
        </div>
        <div>
            <button type="button" class="ok_btn">등록</button>
            <button type="button" class="cancel-btn" @click="$emit('closeModal')">취소</button>
        </div>
        <button class="close_btn" @click="$emit('closeModal')">X</button>
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

<style lang="sass">


</style>