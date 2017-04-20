<template>
    <div>
        <dl>
            <dt class="map-register__list__title">
                <label for="map-register__input__name">나만의 지도 이름</label>
            </dt>
            <dd>
                <input v-model="map_name" 
                    id="map-register__input__name" 
                    class="map-register--map-add-group--map-title" 
                    type="text">
            </dd>
            
            <dt class="map-register__list__title">
                <label for="map-register__textarea__info">나만의 지도 설명</label>
            </dt>
            <dd>
                <textarea v-model="map_description"
                          id="map-register__textarea__info"
                          class="map-register--map-add-group--map-desc" cols="50" rows="3">
                </textarea>
            </dd>
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
        </dl>
        <button type="button" @click="$emit('mapRegister', map_name, map_description)">등록</button>        
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