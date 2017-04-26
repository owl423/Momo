<template>
    <div>
        <div class="search-bar">
            <span class="search-bar__button search-bar__input--text">
                <button class="button--user" 
                        type="button" @click="userMemuClick" 
                        aria-label="사용자 메뉴">
                    유저메뉴
                </button>
            </span>
            <p class="search-bar__input--text">
                <input type="text" placeholder="지도 검색"
                        v-model="search_val" @input="" @keydown.enter="search"> 
            </p>
            <span class="search-bar__button search-bar__button--search">
                <button class="button--search"
                        type="button"
                        aria-label="검색"
                        @click="search">
                    검색
                </button>
            </span>
            <ul v-if="is_search_result_state">
                <li v-for="(place, index) of search_result" v-if="index < 10">
                    <a href="" @click.prevent="moveSelectedPlace(place)">
                        <span class="name">{{place.name}}</span> 
                        <span class="address">{{place.address}}</span> 
                    </a>
                </li>
            </ul>
        </div>
        <transition name="slide" mode="out-in">
            <Usermenu v-if="is_user_menu_state"></Usermenu>
        </transition>
    </div>
</template>

<script>
import Usermenu from './UserMenu.vue';
import {mapMutations, mapGetters, mapActions} from 'vuex';

export default {
    name: 'Search',
    components: {
        Usermenu
    },
    data () {
        return {
            search_val: '',
        }
    },
    computed : {
        ...mapGetters([
            'is_user_menu_state',
            'is_side_menu_state',
            'search_result',
            'is_search_result_state'
        ]),
    },
    methods : {
        ...mapMutations([
            'setUserMenuState',
            'setSideState',
            'setSearchResultState'
        ]),
        ...mapActions([
            'searchPlaceAction',
            'selectedPlace'
        ]),
        userMemuClick(){
            this.setSideState(false);
            this.setUserMenuState(true);
        },
        search(){
            this.setSearchResultState(true);
            this.setUserMenuState(false);
            this.setSideState(false);
            this.searchPlaceAction({search_val: this.search_val, axios: this.$http});
        },
        moveSelectedPlace(place){
            this.selectedPlace({place});
            this.setSearchResultState(false);
        }
    }
        
}
</script>
