<template>
    <div class="tabmenu__view tabmenu__view--map">
        <button 
        class="tabmenu__view__button__edit" 
        @click="$store.state.main_state.is_modal_map_register_open = true">Edit</button>
        
        <dl>
            <dt><input id="tabmenu__view--chk1" type="checkbox">
                 <label for="tabmenu__view--chk1"> 나의 단골 커피집 </label>
            </dt>
            <dd>수수커피</dd>
            <dd>스타벅스 가로수길점</dd>
        </dl>

        
        <dl>
            <dt><input id="tabmenu__view--chk2" type="checkbox">
                 <label for="tabmenu__view--chk2"> 신사 맛집 </label>
            </dt>
            <dd>리버한식</dd>
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
    }
}    
</script>