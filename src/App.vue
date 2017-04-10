<template>
  <div id="app">
    <transition
    enter-active-class="animated fadeIn">
      <router-view :user_profile_url="user_profile_url" :user_name="user_name" @signInInfo="signInInfo"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user_profile_url : null,
      user_name: null,
    }
  },
  components : {
  },
  methods: {
    signInInfo (name, url){
      console.log ('signInInfo');
      console.log(name);
      console.log(url);
      this.user_name = name;
      this.user_profile_url = url;
    }
  }
}
</script>

<style lang="sass">

@import './sass/app'

</style>
