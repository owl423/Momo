<template>
    <div class="user-info">
        <img :src="user_profile" alt="사용자 사진" class="user-info__image">
        <p class="user-info__name">{{user_name}}</p>
        <button class="user-info__edit">Edit</button>
        
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
        data(){
            return {
                user_name : null,
                user_profile : null
            }
        },
        mounted(){
            if( !this.$store.state.user.user_name || !this.$store.state.user.user_profile){
                this.user_name = sessionStorage.getItem('user_name');
                this.user_profile = sessionStorage.getItem('user_profile');
            }else{
                this.user_name = this.$store.state.user.user_name;
                this.user_profile = this.$store.state.user.user_profile;
            }
        }
    }
</script>