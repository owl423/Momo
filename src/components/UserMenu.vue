<template>
    <div class="usermenu-wrap">
        <div class="usermenu">
            <h1>나의 장소</h1>
            <button class="usermenu__button" @click="$emit('menuClose')"> < </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'user-menu',
  data (){
      return {

      }
  },
  methods: {

  }
}
</script>
