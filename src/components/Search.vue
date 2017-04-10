<template>
    <div class="search-bar">
        <button class="menu--user" type="button" aria-label="사용자 메뉴">유저메뉴</button>
        <p class="input-box">
            <input type="text" v-model="search_val"> 
            <button class="button--search" type="button" aria-label="검색">검색</button>
        </p>
        <ul>
            <li><a href="">수수커피</a></li>
            <li><a href="">에머이</a></li>
            <li><a href="">생어거스틴</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                search_val: null
            }
        },
        updated(){
            console.log('update');
        }
            
    }
</script>
