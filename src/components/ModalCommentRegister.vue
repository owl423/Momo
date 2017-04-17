<template>
    <div class="comment-register">
        <strong class="comment-register__name">{{ this.place_name }}</strong>
        <button class="comment-register__button--close" @click="$emit('closeModal')">X</button>
        
        <form action="">
            <legend></legend>
            <fieldset>
                <dl>
                    <dt>나만의 이름</dt>
                    <dd><input type="text"></dd>
                    <dt>지도 선택</dt>
                    <dd>
                        <select name="" id="">
                            <option value="">카페</option>
                            <option value="">맛집</option>
                            <option value="">여행</option>
                            <option value="">기타</option>
                        </select>
                    </dd>
                    <dt>나만의 이름</dt>
                    <dd><input type="text"></dd>
                    <dt>핀종류 선택</dt>
                    <dd>
                        <div role="group" id="category-group" class="category-group">
                            <button @click="selected_color=0" :class="['food-btn', {'select' : selected_color === 0}]">음식</button>
                            <button @click="selected_color=1" :class="['shopping-btn', {'select' : selected_color === 1}]">쇼핑</button>
                            <button @click="selected_color=2" :class="['stay-btn', {'select' : selected_color === 2}]">숙박</button>
                            <button @click="selected_color=3" :class="['cafe-btn', {'select' : selected_color === 3}]">카페</button>
                            <button @click="selected_color=4" :class="['etc-btn', {'select' : selected_color === 4}]">기타</button>
                        </div>
                    </dd>
                </dl>
            </fieldset>
        </form>

    </div>
</template>

<script>
export default {
    name: 'comment-register',
    data() {
        return {   
            place_name: '수수커피',
            my_place_name: null
        }
    },
    methods: {

    }
}
</script>
