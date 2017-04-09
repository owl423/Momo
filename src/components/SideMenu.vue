<template>
    <div class="menu-wrap">
        <div class="menu">
            <button class="menu__button" @click="$emit('sideClose')"> < </button>
            <div class="pin-info">
                <div class="pin-info__bg"></div>
                <div class="pin-info__header">
                    <h1 class="pin-info__header--title">수수커피</h1>
                    <p>
                        <span class="pin-info__header--category">카페</span>
                        <span class="pin-info__header--nick">'내가 젤 조아하는 티라미슈 맛집'</span>
                    </p>
                    <button
                    class="post-register"
                    @click="$emit('pinRegister')"> Pin </button>
                </div>

                <div class="pin-info__core">
                    <p>주소 : 서울시 강남구 신사동 블라블라~</p>
                    <p>번호 : 010-2345-1123  </p>
                </div>
                <div class="pin-info__review">
                    <div class="pin-info__review__photo">
                        
                    </div>
                    <div class="pin-info__review__comment">
                    </div>                    
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
