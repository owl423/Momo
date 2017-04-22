<template>
    <div class="tabmenu__view tabmenu__view--map">
        <button class="tabmenu__view__button__edit" 
                @click="$store.state.main_state.is_modal_map_register_open = true">
            Edit
        </button>
        
        <dl v-for="map in $store.state.map.map_list">
            <dt><input id="tabmenu__view--chk1" type="checkbox" checked>
                 <label for="tabmenu__view--chk1"> {{map.map_name}} </label>
            </dt>
            <dd v-for="pin in map.pin_list"> {{pin.pin_name}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'tab-menu-map',
    components: {
    },
    data (){
        return {
        }
    },
    mounted(){
        console.log('mounted');
    }
}    
</script>