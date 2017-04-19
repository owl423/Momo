<template>
    <div class="map-register">
        <button class="map-register" @click="$store.state.main_state.is_modal_map_register_open = false">X</button>
        <button class="map-register--map-add-button" @click="is_map_add = !is_map_add">지도추가</button>
        <button class="map-register--map-remove-button">지도삭제</button>
        <div class="map-register--map-add-group" v-if="is_map_add">
            <label>나만의 지도 이름</label>
            <input class="map-register--map-add-group--map-title" type="text">
            <label>나만의 지도 설명</label>
            <textarea class="map-register--map-add-group--map-desc" cols="30" rows="10"></textarea>
            <dl>
                <dt class="map-register__list__title">공개 여부</dt>
                <dd class="map-register__list__select--float">
                    <label for="chk_public">공개</label>
                    <input name="chk" id="chk_public" type="radio">
                </dd>
                <dd>
                    <label for="chk_private">비공개</label>
                    <input name="chk" id="chk_private" type="radio">
                </dd>
            </dl>
        </div>
        <ul>
            <li v-for ="map in map_list">
                {{map.map_name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'map-register',
    data(){
        return {
            map_list: [],
            is_map_add: false
        };
    },
    mounted(){
        let url = this.$store.state.url + '/api/member/' + window.sessionStorage.getItem('user_pk');
        this.$http.get(url)
        .then(function(res){
            console.log('res: ', res);
        })
        .catch(function(err){
            console.log(err.response);
        });
    }
}
</script>