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
        name: 'Search',
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
            this.searchPlace();
        },
        methods : {
            searchPlace(){
                let _this = this;
                let url = this.$store.state.url + '/api/search/place/';
                let keyword = '?keyword='+_this.search_val;
                url += keyword;
                console.log('url:', url);

                // axios에서 헤더 인증정보 토큰 설정
                this.$http.defaults.headers.common['Authorization'] = "Token "+_this.$store.state.user.user_token;
                console.log(url);
                this.$http.get(url)
                .then(function(res){
                    console.log(res);
                })
                .catch(function(err){
                    console.log(err.response);
                })
            }
        }
            
    }
</script>
