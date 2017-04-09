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

                <ul class="pin-info__core">
                    <li>주소 : 서울시 강남구 신사동 블라블라~</li>
                    <li>번호 : 010-2345-1123 </li>
                </ul>
                <div class="pin-info__review">
                    <div class="pin-info__review__photo">
                        <strong>사진</strong>
                        <button type="button">사진관리</button>
                        <a href="" title="전체 사진 슬라이드로 보기"><img src="../assets/sample_cafe.jpg" alt="대표사진"></a>
                    </div>
                    <div class="pin-info__review__comment">
                        <strong>코멘트</strong>
                        <button type="button">코멘트 관리</button>
                        <a href="" title="전체 코멘트 보기"></a>
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
