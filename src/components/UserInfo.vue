<template>
    <div class="user--info">
        <img :src="user_profile_url" alt="사용자 사진" class="user--info__image">
        <p class="user--info__name">{{user_name}}</p>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
        props: ['user_name', 'user_profile_url']
    }
</script>