<template>
    <div class="usermenu-wrap">
        <div class="usermenu">
            <div class="usermenu__header">
                <h1>나의 장소</h1>
                <button class="usermenu__button button__panel__close" @click="setUserMenuState(false)"> < </button>
            </div>
            <div class="usermenu__view">
                <Tabmenu></Tabmenu>
            </div>
        </div>
    </div>
</template>

<script>

import Tabmenu from './TabMenu.vue';
import {mapMutations} from 'vuex';

export default {
    name: 'user-menu',
    components: {
        Tabmenu
    },
    methods: {
        ...mapMutations([
            'setUserMenuState'
        ]),
    }
}
</script>
