<template>
    <div class="comment-register">
        <button class="comment-register__button__close
                        button__modal__close" 
                @click="$emit('closeModal')">
        </button>
        <strong class="comment-register__name">
            {{ this.pin_name }}
        </strong>
        
        <dl class="comment-register__form register__form">
            <dt class="comment-register__form__title">
                <label for="comment-register_name">
                    나만의 이름
                </label>
            </dt>
            <dd>
                <input v-model="comment_name"
                        id="comment-register_mapname"
                        class="comment-register__name"
                        type="text">
            </dd>
            <dt class="comment-register__form__title">
                <label for="comment-register_mapselect">
                    지도선택
                </label>
            </dt>
            <dd class="comment-register__form__select">
                <select v-model="selected" 
                        id="comment-register_mapselect" 
                        class="map-select"
                        name="">
                    <option v-for="map of map_list">
                        {{map.map_name}}
                    </option>
                </select>
            </dd>
            <dt class="comment-register__form__title">
                <label for="comment-register_nick">나만의 이름</label>
            </dt>
            <dd><input id="comment-register_nick" type="text"></dd>
            <dt class="comment-register__form__title">
                <label for="comment-register_category-group">
                    핀종류 선택
                </label>
            </dt>
            <dd>
                <div role="group" id="comment-register_category-group" 
                    class="comment-register__form__category-group
                           register__category-group">
                    <button @click="selected_color=0" :class="['food-btn', {'selected' : selected_color === 0}]">음식</button>
                    <button @click="selected_color=1" :class="['shopping-btn', {'selected' : selected_color === 1}]">쇼핑</button>
                    <button @click="selected_color=2" :class="['stay-btn', {'selected' : selected_color === 2}]">숙박</button>
                    <button @click="selected_color=3" :class="['cafe-btn', {'selected' : selected_color === 3}]">카페</button>
                    <button @click="selected_color=4" :class="['etc-btn', {'selected' : selected_color === 4}]">기타</button>
                </div>
            </dd>
        </dl>

    </div>
</template>

<script>
export default {
    name: 'comment-register',
    data() {
        return {   
            pin_name: '수수커피',
            comment_name: null,
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
    methods: {

    }
}
</script>
