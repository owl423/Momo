<template>
    <div class="user-info">
        <img :src="user_profile_url" alt="사용자 사진" class="user-info__image">
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
                user_profile_url : null
            }
        },
        mounted(){
            this.user_name = this.$store.state.user.user_name;
            this.user_profile_url = this.$store.state.user.user_profile_url;
        }
    }
</script>