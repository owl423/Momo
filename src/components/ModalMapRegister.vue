<template>
    <div class="map-register">
        <button class="map-register">X</button>
        <button class="map-register--map-add-button">지도추가</button>
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
            map_list: []
        };
    },
    mounted(){
        let url = this.$store.state.url + '/api/map/'
        this.$http.get(url)
        .then(function(res){
            console.log('res: ', res);
        })
        .catch(function(err){
            console.log(err);
        });
    }
}
</script>