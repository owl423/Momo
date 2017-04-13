<template>
    <div class="usermenu-wrap">
        <div class="usermenu">
            <div class="usermenu__header">
                <h1>나의 장소</h1>
                <button class="usermenu__button" @click="$emit('menuClose')"> < </button>
            </div>
            <div class="usermenu__view">
                <Tabmenu></Tabmenu>
            </div>
        </div>
    </div>
</template>

<script>

import Tabmenu from './TabMenu.vue';

export default {
    name: 'user-menu',
    components: {
        Tabmenu
    },
    data (){
        return {

        }
    },
    methods: {

    }
    }
</script>
