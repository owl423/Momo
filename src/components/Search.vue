<template>
    <div>
        <div class="search-bar">
            <button class="search-bar__button--user" 
                    type="button" @click="is_menu_open=true" 
                    aria-label="사용자 메뉴">
                유저메뉴
            </button>
            <p class="input-box">
                <input type="text" v-model="search_val"> 
                <button class="search-bar__button--search" type="button" aria-label="검색">검색</button>
            </p>
            <ul>
                <li><a href="">수수커피</a></li>
                <li><a href="">에머이</a></li>
                <li><a href="">생어거스틴</a></li>
            </ul>
        </div>
        <transition name="slide" mode="out-in">
            <Usermenu v-if="is_menu_open" @menuClose="is_menu_open=false"></Usermenu>
        </transition>
    </div>
</template>

<script>
    import Usermenu from './UserMenu.vue';

    export default {
        name: 'search',
        components: {
            Usermenu
        },
        data () {
            return {
                is_menu_open: false,
                search_val: null
            }
        },
        updated(){
            console.log('update');
        }
            
    }
</script>
