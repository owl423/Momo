<template>
    <div>
        <div class="search-bar">
            <span class="search-bar__button search-bar__input--text">
                <button class="button--user" 
                        type="button" @click="is_menu_open=true" 
                        aria-label="사용자 메뉴">
                    유저메뉴
                </button>
            </span>
            <p class="search-bar__input--text">
                <input type="text" placeholder="지도 검색"
                        v-model="search_val" @keyup="searchPlace"> 
            </p>
            <span class="search-bar__button search-bar__button--search">
                <button class="button--search"
                        type="button"
                        aria-label="검색">
                    검색
                </button>
            </span>
            <ul>
                <li v-for="search of search_list">
                    <a href="">
                        <span class="name">{{search.name}}</span> 
                        <span class="address">{{search.address}}</span> 
                    </a>
                </li>
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
                search_val: '',
                search_list: []
            }
        },
        updated(){
        },
        methods : {
            searchPlace(){
                let _this = this;
                let url = this.$store.state.url + '/api/search/place/';
                let keyword = '?keyword='+_this.search_val;
                url += keyword;

                // axios에서 헤더 인증정보 토큰 설정
                this.$http.defaults.headers.common['Authorization'] = "Token "+_this.$store.state.user.user_token;
                this.$http.get(url)
                .then(function(res){
                    console.log(res);
                    _this.search_list = res.data;
                })
                .catch(function(err){
                    console.log(err.response);
                })
            }
        }
            
    }
</script>
