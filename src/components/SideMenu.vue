<template>
    <div class="menu-wrap">
        <div class="menu">
            <button class="menu__button" @click="$emit('sideClose')"> < </button>
            <div class="pin-info">
                <div class="pin-info__bg"></div>
                <div class="pin-info__header">
                    <dl>
                        <dt class="pin-info__header--title">수수커피</dt>
                        <dd class="pin-info__header--category">카페</dd>
                        <dd class="pin-info__header--nick">'내가 젤 조아하는 티라미슈 맛집'</dd>
                    </dl>
                    <button
                    class="post-register"
                    @click="$emit('pinRegister')"> Pin </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'side-menu',
  props: ['is_modal'],
  data (){
      return {

      }
  },
  methods: {

  }
}
</script>
