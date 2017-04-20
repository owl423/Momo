<template>
    <div>
        <dl>
            <dt class="map-register__add-group__title">
                <label for="map-register__input__name">나만의 지도 이름</label>
            </dt>
            <dd>
                <input v-model="map_name" 
                    id="map-register__input__name" 
                    class="map-register__add-group__name" 
                    type="text">
            </dd>
            
            <dt class="map-register__add-group__title">
                <label for="map-register__desc">나만의 지도 설명</label>
            </dt>
            <dd>
                <input v-model="map_description"
                        id="map-register__desc"
                        class="map-register__add-group__desc"
                        type="text">
            </dd>
            <!--
            <dt class="map-register__list__title">
                공개 여부
            </dt>
            <dd class="map-register__list__select--float">
                <label for="chk_public">공개</label>
                <input name="chk" id="chk_public" type="radio">
            </dd>
            <dd>
                <label for="chk_private">비공개</label>
                <input name="chk" id="chk_private" type="radio">
            </dd>
            -->
        </dl>
        <button type="button"
                class="map-register__add-group__button__resister
                      button__register"
                @click="$emit('mapRegister', map_name, map_description)">
                등록
        </button>        
    </div>
</template>
<script>
    export default {
        name : 'map-register-form',
        data(){
            return {
                'map_name': '',
                'map_description': ''
            }
        }
    }
</script>