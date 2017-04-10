<template>
  <div id="app">
    <transition
    enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components : {
  },
  methods: {
  }
}
</script>

<style lang="sass">

@import './sass/app'

</style>
