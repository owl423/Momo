<template>
    <div class="user-info">
        <img :src="$store.state.user.user_profile" alt="사용자 사진" class="user-info__image">
        <p class="user-info__name">{{$store.state.user.user_name}}</p>
        <button class="user-info__edit">Edit</button>
        
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
        mounted(){
            // '/map'에서 새로고침 했을 경우
            //  유저 이름, 프로필사진 url, pk, token 중 하나라도 없는 경우 vuex 세팅
            if( !this.$store.state.user.user_name || 
                !this.$store.state.user.user_profile || 
                !this.$store.state.user.user_pk || 
                !this.$store.state.user.user_token){
                let user_name = sessionStorage.getItem('user_name');
                let user_profile = sessionStorage.getItem('user_profile');
                let user_pk = sessionStorage.getItem('user_pk');
                let user_token = sessionStorage.getItem('user_token');
                this.$store.commit('setUserInfo', {
                    user_name,
                    user_profile,
                    user_token,
                    user_pk
                });
            }
        }
    }
</script>